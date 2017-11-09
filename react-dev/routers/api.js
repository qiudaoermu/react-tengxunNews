/**
 * Created by Administrator on 2017/4/8.
 */
var express = require('express')

var router = express.Router()

var result;
var TEST_TABLE = 'database';

var newsList
var mongo=require("mongodb");
var host="localhost";
//var port=mongo.Connection.DEFAULT_PORT;
var server=mongo.Server(host,27017,{auto_reconnect:true});

var db=new mongo.Db("tengxunNews",server,{safe:true});
db.open(function (err,db) {
    db.collection("newsComponent", function (err,collection) {
        if(err) throw err;
        else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{

                    result = docs;
                    db.close();
                }
            });
        }
    });
    db.collection("newsList", function (err,collection) {
        if(err) throw err;
        else{
            collection.find({}).toArray(function(err,docs){
                if(err) throw  err;
                else{

                    newsList = docs;
                    db.close();
                }
            });
        }
    });

});

router.get('/user/signup', function (req, res, next) {

    var mark =0;
    for(var i=0;i<result.length;i++){
        var name = new String(result[i].name);
        var password = new String(result[i].password);
        if(!(name==req.body.user&&password==req.body.password)){
            mark++;
        }
    }
    console.log(result)
    res.send(result)

});
router.post('/user/newsList', function (req, res, next) {
    console.log(newsList)

    var targetData=req.body.targetData;
    console.log(targetData)
    res.send(newsList[targetData])

});


router.post('/user/newsDetail', function (req, res, next) {


    var foo=req.body;
    var para = req.params;
    console.log(para)
    console.log(foo)

    var json={a:1,b:3}
    res.send(json)



});

module.exports = router;