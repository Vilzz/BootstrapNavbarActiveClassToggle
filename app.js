const express = require('express');
const path = require('path');
const ejs =require('ejs').renderFile;
const expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('views', './views');
app.use(express.static(path.join(__dirname + '/public')));

app.engine('html', ejs);
app.use(expressLayouts);
app.set('view engine', 'html');
app.use('/', require('./routes/mainroutes'));

app.listen('3000', ()=>{
    console.log("Server running on http://localhost:3000");
    
});