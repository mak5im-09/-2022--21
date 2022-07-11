const express = require('express');
const router = express.Router();
let { model } = require("../models/m_new_feed.js");
const dp = require("../private/database.js");
const htmlParser = express.urlencoded({extended: false});

router.get('/', (req, res) => {
    model.feeds = dp.getFeeds(); // добавил
    res.render('new_feed.ejs', model); // render view
});

router.post('/', htmlParser, (req, res) => {
    let { userName, userFeed, userNumber } = req.body;
    dp.insertFeed(userName, userFeed, userNumber);
    res.redirect("/feeds");
});

module.exports = router;
