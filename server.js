const express = require('express'); //gives access to the express library by searching my node_modules for 'express'.
const app = express(); //creates an instance of the express constructor, named 'app'.

const mockUserDate = [
    { name: 'Victor' },
    { name: 'Abolarin' }
]
app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'Successfully got users, Nice!',
        users: mockUserDate
    })
})



app.listen(8000, function() {
    console.log("Server is Running")
})