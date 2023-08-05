const mongoose = require("mongoose")
const Document = require("./Document")
const uri = "mongodb+srv://spring:spring123.@cluster0.0obwapc.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false, 
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const io = require('socket.io')(3001, {
    cors: {
        origin: `http://localhost:3000`,
        methods: ["GET", "POST"],
    },
})

const defaultValue= ""

io.on("connection", socket => {
    socket.on('get-document', async documentId => {
        const document = await findOrCreateDocument(documentId)
        socket.join(documentId)
        socket.emit("load-document", document.data)
    
    socket.on(`send-changes`, delta => {
        socket.broadcast.to(documentId).emit("receive-changes", delta)
    })

    socket.on("save-document", async data => {
        await Document.findByIdAndUpdate(documentId, {data})

    })
})
})


async function findOrCreateDocument(id){
    if( id == null) return
    const document = await Document.findById(id);

    if ( document) return document
    return await Document.create({_id: id, data: defaultValue})
}