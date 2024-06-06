const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({ extendeds: false }))
app.use("/add-product", (req, res, next) => {
    console.log("in add-product!");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});
app.use("/product", (req, res, next) => {

    console.log(req.body);
    res.redirect("/");
});
app.use("/", (req, res, next) => {
    console.log("in anther middleware!");
    res.send('<h>in home </h>');
});
app.listen(3000);