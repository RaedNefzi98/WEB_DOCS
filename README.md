<h3 align="center">This a Real Time Web Docs ( Google docs like ) application that enables user to create documents with a collaborative option and store them into a mongoDB database, leverging React in the FrontEnd and node.js in the BackEnd , and Socket.IO for real time messaging.</h3>

<h3 align="left">Connect with me:</h3>
<p align="left">
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>


 <h1>Web Docs Collaboration App</h1>

    <p>This is a modern web application that enables users to collaboratively create documents in a real-time web
        environment. The application leverages Socket.io for real-time communication between users and utilizes a
        MongoDB database for document storage. Users can access the application through a user-friendly front-end
        built with React, and the back-end is implemented using Node.js and MongoDB.</p>

    <h2>Features</h2>

    <ul>
        <li>Real-time collaboration: Multiple users can edit the same document simultaneously in real-time.</li>
        <li>Instant updates: Changes made by one user are immediately reflected to all other connected users.</li>
        <li>User-friendly interface: The text editor interface is built using the Quill library and provides a
            variety of formatting options.</li>
        <li>Automatic saving: Documents are automatically saved at regular intervals to prevent data loss.</li>
        <li>Dynamic document creation: Users are provided with unique document URLs upon accessing the application,
            allowing easy sharing and collaboration.</li>
    </ul>

    <h2>Technologies Used</h2>

    <p><strong>Front-End:</strong> React, React Router, Quill</p>
    <p><strong>Back-End:</strong> Node.js, Express, MongoDB, Socket.io</p>
    <p><strong>Styling:</strong> CSS</p>

    <h2>Getting Started</h2>

    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/your-username/web-docs-app.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd web-docs-app</code></pre>
        </li>
        <li>Install dependencies for both the front-end and back-end:
            <pre><code>cd frontend
npm install
cd ../backend
npm install</code></pre>
        </li>
        <li>Start the back-end server (Make sure MongoDB is running):
            <pre><code>npm start</code></pre>
        </li>
        <li>Start the front-end development server:
            <pre><code>cd ../frontend
npm start</code></pre>
        </li>
        <li>Access the application in your web browser at <code>http://localhost:3000</code>.</li>
    </ol>

    <h2>How It Works</h2>

    <h3>Front-End</h3>

    <p>The front-end is built using React and provides a user-friendly text editor interface using the Quill library.
        Users can access the application through a unique URL that represents a document. Multiple users can
        collaborate on the same document in real-time.</p>

    <h3>Back-End</h3>

    <p>The back-end is implemented using Node.js and Express. It connects to a MongoDB database to store and retrieve
        document data. Socket.io is used for real-time communication between users. The back-end handles document
        creation, retrieval, saving, and real-time updates.</p>

    <h2>Contributing</h2>

    <p>Contributions are welcome! If you find any issues or would like to enhance the application, feel free to submit
        a pull request.</p>
