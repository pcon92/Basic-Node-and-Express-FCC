var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));

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

app.get("/json", (req, res) => {
    res.json({"message": "Hello json"})
});





























 module.exports = app;
