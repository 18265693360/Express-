//安装express  终端打开 键yarn add express --save
//引入express

// const express = require("express");
// const app = express();
//
// //创建一个网址 app.get()  接上要解析的路径
// app.get("/",(req,res,next)=>{
//     console.log(req.url);
//     res.send("hello express!");//返回值
// })
// app.listen(3111);//监听端口
//这就是一个服务器
// 在终端 且和express在同一个目录中 输入node 空格+文件名
// 就生成了一个服务器



// const express = require("express");
// const app = express();
// const path = require("path");//引入路径
//
// //创建一个网址 app.get()  接上要解析的路径
// app.get("/",(req,res,next)=>{
//     console.log(req.url);
//     //res.send("hello express!");//返回值
//     res.sendFile(path.resolve(__dirname,'./02发送一个post请求.html'));
//     //需要引入一个绝对路径  需要重启
// });
//
// app.post("/",(req,res,next)=>{
//     res.send("收到post请求");
// })
// app.listen(3111)//监听端口

const express = require("express");
const app = express();
const path = require("path");

app.get("/",(req,res,next)=>{
    console.log(req.url);
    res.sendFile(path.resolve(__dirname,'./03.发送一个post.html'))
});

app.post("/",(req,res,next)=>{
    res.send("收到post请求")
});
app.listen(3111);

