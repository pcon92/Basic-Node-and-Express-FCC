var express = require('express');
var app = express();
require('dotenv').config(); 

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next();
});

app.get('/name', (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json({name: `${firstName} ${lastName}`});
});


/* Challenge 9 
app.get('/:word/echo', (req, res, next) => {
    req.word = req.params.word;
    next();
}, (req, res) => {
    res.json({echo: req.word});
});
*/

/*
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
});
/*
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
