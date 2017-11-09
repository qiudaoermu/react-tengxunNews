/**
 * Created by Administrator on 2017/4/8.
 */
var express = require('express')
var app = express();
var router = express.Router();
router.use('/', function (req, res, next) {

    res.render("views")
    //res.redirect('/views');
});


module.exports = router;