const express = require('express'); //gives access to the express library by searching my node_modules for 'express'.
const app = express(); //creates an instance of the express constructor, named 'app'.

app.listen(8000, function() {
    console.log("Server is Running")
})