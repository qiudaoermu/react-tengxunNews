/**
 * Created by Administrator on 2017/4/9.
 */

/*var mongoose = require("mongoose");

var UserSchema = require("../routers/user");

var User = mongoose.model("User",UserSchema)

module.exports = User*/;

var express = require('express')
var app = express();
var User = express.Router();
User.use('/', function (req, res, next) {

    res.render("views")
    //res.redirect('/views');
});


module.exports = User;