const express = require('express');
const app = express();

app.use("/add-product", (req, res, next) => {
    console.log("in add-product!");
    res.send('<h>in add-product! </h>');
});
app.use("/", (req, res, next) => {
    console.log("in anther middleware!");
    res.send('<h>in home </h>');
});
app.listen(3000);