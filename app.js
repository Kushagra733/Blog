const express = require('express');
const parser = require('body-parser');


const app = express();

var blogs = [];
app.use(parser.urlencoded({ extended: false }));



app.set('view engine','ejs');

app.get('/',(req,res)=>{

 
    res.render('home',{x:blogs});
});

app.get('/compose',(req,res)=>{
    res.render('compose');
});
app.post('/compose',(req,res)=>{
    blogs.push(req.body.tex);
    res.redirect('/');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
})

app.listen(process.env.PORT||3000);