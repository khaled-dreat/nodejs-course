const express = require('express');

const router = express.Router();


router.get("/", (req, res, next) => {
    console.log("in anther middleware!");
    res.send('<h1>in home </h1>');
});


module.exports = router;