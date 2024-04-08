// app.js
const express = require('express');
const app = express();

// Define routes and middleware here
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});
  
// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
