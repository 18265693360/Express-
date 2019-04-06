//路由句柄 就是回调函数

const express = require("express");
const app = express();

//req 记载用户的请求信息
app.get("/index",function (req,res,next) {
    console.log("这是第一个函数");
    next();
},function () {
    console.log("第二个函数");
});

app.listen(3022);

//输入 localhost:3017/index
//没有写res只有终端有反应