
const firebase = require('firebase');
const express = require('express');
const app= express();
const port = process.env.PORT || 4000;

const indexRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');


app.use('/', indexRoute);
app.use('/about', aboutRoute);
app = firebase.initializeApp({""});

console.log(app.database());
/*
app.get('/', (req,res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/
//--Serve static images
app.use('/static', express.static('public'))
//http://localhost:4000/static/LinkedInHeadshot_copied_inage.jpg this is the file path to locate the image in the browser after I type
//npm start in the terminal

app.listen(port, () => console.log(`Example app listening on port${port}`))
