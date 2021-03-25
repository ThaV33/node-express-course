const express = require('express'); //gives access to the express library by searching my node_modules for 'express'.
const app = express(); //creates an instance of the express constructor, named 'app'.

const mockUserDate = [
        { name: 'Victor' },
        { name: 'Abolarin' }
    ]
    // app.get('/users', function(req, res) {
    //     res.json({
    //         success: true,
    //         message: 'Successfully got users, Nice!',
    //         users: mockUserDate
    //     })
    // })

app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})





app.listen(8000, function() {
    console.log("Server is Running")
})