const express = require('express');
const path = require('path');
const adminData = require("./admin");
const router = express.Router();


router.get("/", (req, res, next) => {
    const products = adminData.product
    res.render("shop", { prods: products, docTile: "Shop" });
});


module.exports = router;