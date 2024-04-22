const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Add this line to import the path module
const { MongoClient } = require('mongodb');

//connect to mongodb 

// Connection URI
const uri = 'mongodb+srv://admin:xolakota@cluster0.zvldrni.mongodb.net/?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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

// Define a route to handle POST requests for registration
app.post('/register', (req, res) => {
    const name = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;

 
    // Connect to MongoDB
    async function connectToMongoDB() {
        try {
            // Connect to the MongoDB server
            await client.connect();
            console.log('Connected to MongoDB');

            // Access your database, collections, and perform operations here
            // Example: const database = client.db('mydatabase');

            const database = client.db('TechatronicsChatApp');
            const collection = database.collection('users');

            // Insert a single document or a user 
            const document = { userName: name, email: email , password: password};
            try {
                const result = await collection.insertOne(document);

                console.log(`Inserted ${result.insertedCount} document into the collection`);
                
                // Redirect to another page
                res.redirect('/index.html');
                 
            } catch (error) {
                console.error('Error inserting document:', error);
            }


        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }

    console.log("Name:", name); // Check the console for errors or logs
    //res.send("Data received");
    // Call the connectToMongoDB function to establish the connection
    connectToMongoDB();



});


// Define a route to handle POST requests for login
app.post('/login', (req, res) => {

    const email = req.body.email;
    const password = req.body.password;

 
    // Connect to MongoDB
    async function connectToMongoDB() {
        try {
            // Connect to the MongoDB server
            await client.connect();
            console.log('Connected to MongoDB');

            // Access your database, collections, and perform operations here
            // Example: const database = client.db('mydatabase');

            const database = client.db('TechatronicsChatApp');
            const collection = database.collection('users');

            // Query the collection to retrieve data

            const query = { email: email };
            
            try {

                // Query the collection
                const result = await collection.find(query).toArray();

                // Log or process the result
                console.log('Documents found:', result);

                
                if(result.length === 0 ){
                    //console.log(result[0].email);
                    res.redirect('/register.html');
                }else{
                    res.redirect('/chat.html');
                    console.log(result[0].email);
                }
                
            } catch (error) {
                console.error('Error inserting document:', error);
            }


        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    }

    // Call the connectToMongoDB function to establish the connection
    connectToMongoDB();



});




// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});







