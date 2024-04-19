const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Add this line to import the path module

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse url-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define the directory where your HTML files are located
const publicDirectoryPath = path.join(__dirname);

// Set up middleware to serve static files (like HTML, CSS, and JavaScript)
app.use(express.static(publicDirectoryPath));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Define a route to handle POST requests
app.post('/login', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    
 
    console.log("Name:", name); // Check the console for errors or logs
    res.send("Data received");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});







