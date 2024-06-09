const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const adminRoutes = require("./route/admin");
const shopRoutes = require("./route/shop");
app.use(bodyparser.urlencoded({ extendeds: false }))
app.use("/admin", adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});
app.listen(3000);