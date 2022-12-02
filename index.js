const express = require('express');
const path = require('path');
const port = 8000;
// const hbs = require("hbs");

// const staticPath = path.join(__dirname, '../views');

const db = require('./config/mongoose');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('Assets'));


app.get('/', function(req, res){
    return res.render('main', {});
});
app.get('/about', function(req, res){
    return res.render('about us', {});
});
app.get('/account', function(req, res){
    return res.render('account', {});
});
app.get('/books', function(req, res){
    return res.render('books', {});
});
app.get('/cart', function(req, res){
    return res.render('cartpage', {});
});
app.get('/create', function(req, res){
    return res.render('Create', {});
});
app.get('/forgot', function(req, res){
    return res.render('Forgot', {});
});
app.get('/poster', function(req, res){
    return res.render('poster', {});
});
app.get('/privacy', function(req, res){
    return res.render('Privacy', {});
});
app.get('*', function(req, res){
    return res.render('error', {});
});

// app.post('/create', function(req, res){
//     return res.render('Create', {});
// });


app.post("/create", async(req, res) => {
    try{
        // console.log(req.body.firstname);
        // req.send(req.body.firstname);

        const newuser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        })

        const created = await newuser.save();
        res.status(201).render("create")
    } catch(error){
        res.status(400).send(error);
    }
})



app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})




