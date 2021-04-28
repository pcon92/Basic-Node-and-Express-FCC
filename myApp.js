var express = require('express');
var app = express();
require('dotenv').config(); 

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
});


app.get('/now', (req, res, next) => {
    req.time = newDate().toString();
}, (req, res) => {
    res.send({time: req.time});
});

/* Challenge 1
console.log("Hello World");
*/

/* Challenge 2
app.get("/", (req, res) => {
    res.send("Hello Express");
})
*/

/* Challenge 3 
app.get("/", (req, res) => {
    const absolutePath = __dirname + "/views/index.html";
    res.sendFile(absolutePath);
});
*/

/*
app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"})
    }

});
*/





























 module.exports = app;
