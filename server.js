const express = require('express'); //gives access to the express library by searching my node_modules for 'express'.
const app = express(); //creates an instance of the express constructor, named 'app'.
const bodyParser = require('body-parser');

app.use(bodyParser.json());


//GET REQUEST
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


app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})


//POST REQUEST
app.post('/login', function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    //This should come from database
    const mockUsername = "thav33";
    const mockPassword = "mypassword";

    if (username === mockUsername && password === mockPassword) {
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'PASSWORD AND USERNAME MATCH!',
            token: 'encrypted token goes here'

        })

    } else {
        res.json({
            success: false,
            message: 'PASSWORD AND USERNAME MATCH!'
        })
    }


})





app.listen(8000, function() {
    console.log("Server is Running")
})