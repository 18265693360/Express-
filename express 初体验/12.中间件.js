// post快速解析 有中间件
// 指express通过路由句柄 经过函数加工后继续使用
// 所以中间件是指 通过一个函数提前处理信息加到req
const express = require("express");
const app = express();
const path = require("path");
const query = require("querystring");
const bodyParser = require("body-parser");

//尽量放在所有请求的前面 两种解析都会起作用 选择性的解析
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}
app.use(express.static('public', options))




app.get("/index",(req,res,next)=>{
    res.sendFile(path.resolve(__dirname,"./11.html"))
});


app.get("/something",(req,res,next)=>{
    console.log(req.url);
    console.log(req.query.shengao);

    res.json({
        data:"返回信息",
    })
});

// 这个函数专门用来对这个数据进行加工的就是中间件 可以有无限个
// app.use("/getPost",(req,res,next)=>{
//     var str = '';
//     req.on("data",function (chunk) {
//         str+=chunk;
//     });
//     req.on("end",function () {
//         // console.log(str);
//         // console.log(query.parse(str).name);
//         req.body = query.parse(str);
//         next();
//         })
//     })

app.post("/getPost",(req,res,next)=>{
    console.log(req.body);
    res.json(req.body);
});
app.listen(3027);
