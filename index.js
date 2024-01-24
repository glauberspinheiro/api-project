// Install necessary packages
// npm install express body-parser

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of Express
const app = express();

// Use bodyParser to parse JSON payloads
app.use(bodyParser.json());

// Array to store received payloads
const receivedPayloads = [];

// Endpoint to receive webhook events (POST requests)
app.post('/webhook', (req, res) => {
  // The request payload is available in req.body
  const payload = req.body;

  // Store the received object in the array
  receivedPayloads.push(payload);

  // Process the received object
  console.log('Received payload:', payload);

  // Respond to the webhook with a success message
  res.status(200).json({ message: 'Webhook received successfully' });
});

// Endpoint to get the list of received payloads
app.get('/webhook/list', (req, res) => {
  res.status(200).json({ payloads: receivedPayloads });
});

// Set the port for the server to listen on
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
