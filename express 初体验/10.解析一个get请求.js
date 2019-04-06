//get 和 post请求的区别
//模板英文 template

const express = require("express");
const app = express();
const path = require("path");
const query = require("querystring");//安装方法 yarn add querystring --saveyatgd

app.get("/index",(req,res,next)=>{//主页
    res.sendFile(path.resolve(__dirname,"./11.html"))
});


app.get("/something",(req,res,next)=>{
    console.log(req.url);
    console.log(req.query.shengao);//已经将字符串切好了
    //post并不支持此类功能

    res.json({
        data:"返回信息",
    })
});

app.post("/getPost",(req,res,next)=>{
    var str = '';
   req.on("data",function (chunk) {
       str+=chunk;
   });
    req.on("end",function () {
        console.log(str);
        console.log(query.parse(str).name);
        res.json({
            data:"接收到了post"
        })
    })
});


app.listen(3026);