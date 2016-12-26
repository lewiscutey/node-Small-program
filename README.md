# node-Small-program
https://lewiscutey.github.io/node-Small-program
##开发node 小程序（new命令-创建js/img/css/index.html）
###1.npm init 配置json文件
{
  "name": "new",
  "version": "1.0.0",
  "description": "",
  "main": "mk.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "lewis",
  "license": "ISC",
  "bin":{
    "new":"./mk.js"
  }
}

###2.小程序基本主文件
var fs = require("fs");
function mkdir(path) {
    var arr = path.split("/");
    var path = "";
    arr.forEach(function (name,val) {
        path += name + "/";
        if(name.indexOf(".")>-1){
            var lastname = name.slice(name.indexOf(".")+1);
            if(lastname == "html"){
                var str = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

</body>
</html>`;
                fs.writeFile(path.slice(0,-1),str);
            }else if(lastname == "js"){
                var str1 = `$(function(){
                
});`;
                fs.writeFile(path.slice(0,-1),str1);
            }else{
                fs.writeFile(path.slice(0,-1),"");
            }
        }else{
            fs.mkdirSync(path);
        }
    })
}
module.exports.mkdir = mkdir;
###3.小程序入口文件
#!C:\nodejs\node.exe
var mk = require("./mkdir.js");
mk.mkdir("js/index.js");
mk.mkdir("css/index.css");
mk.mkdir("img");
mk.mkdir("index.html");
####万事俱备只欠安装node基本模块，运行入口文件了.
