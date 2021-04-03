const express = require("express")
const path = require("path");
const layout = require('express-ejs-layouts')
const mongoose = require('mongoose');

const app = express()


// Layout and ejs
app.use(layout)
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use( express.json() )

// Routes EJS
app.use('/', require('./routes/admin'))



//  Router Backend


// Port
const PORT = 4000
app.listen(PORT, ()=> {
    console.log(`Server run ${PORT}`);
})