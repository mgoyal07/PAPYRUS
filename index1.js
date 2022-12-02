const express = require('express');
const port = 8000;
const app = express();


app.get('/', function(req, res){
    res.send("<h1>Cool! It is running...</h1>")
})



app.listen(port, function(err){
    if(err){
        console.log("Error in running in the server", err)
    }
    console.log("Yup! My server is running on port", port)
})