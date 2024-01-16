// Create a web server that can receive a POST request containing a comment and username field.
// Store the comments in an array in memory.
// Add a GET request to the path /comments that returns the list of comments.
// Test your web server using Postman or curl.

// 1. Import the express library
const express = require("express");

// 2. Create an instance of an express app
const app = express();

// 3. Define a port to run on
const port = 3000;

// 4. Define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 5. Define a route handler for the /comments post request
app.post("/comments", (req, res) => {
  res.send("Post request received");
});

// 6. Define a route handler for the /comments get request
app.get("/comments", (req, res) => {
  res.send("Get request received");
});

// 7. Start the server listening on the port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
