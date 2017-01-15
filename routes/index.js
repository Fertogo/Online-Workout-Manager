var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect("https://play.google.com/store/apps/details?id=com.trujano.customworkouttimer");
});

module.exports = router;
