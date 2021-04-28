var express = require('express');
var app = express();

console.log("Hello World");

/* Challenge 2
app.get("/", (req, res) => {
    res.send("Hello Express");
})
*/

/* Challenge 3 */
app.get("/", (req, res) => {
    const absolutePath = __dirname + "/views/index.html";
    res.send(absolutePath);
});






























 module.exports = app;
