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