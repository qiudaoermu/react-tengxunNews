/**
 * Created by Administrator on 2017/4/9.
 */
var formidable = require('formidable');
var fs = require('fs');  //node.js核心的文件处理模块

exports.upload = function(req, res, next){
    var message = '';
    console.log(message)
};
exports.download = function(req, res){
    var path = 'public/upload/file.txt';  // 文件存储的路径

    console.log(path)
};