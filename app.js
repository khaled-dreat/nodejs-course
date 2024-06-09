const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const app = express();
const adminRoutes = require("./route/admin");
const shopRoutes = require("./route/shop");
app.use(bodyparser.urlencoded({ extendeds: false }))
app.use("/admin", adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);