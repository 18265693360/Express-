//路由就是嵌套
//https://www.kancloud.cn/yunye/axios/234845
//https://www.kancloud.cn/ 主域名
// yunye
// /axios 二级路由
// /234845 三极路由

//引入express
//中间件 使用express & router来制作
const express = require("express");
const app = express();
const pageRoutes = require("./08.路由实例上的路由.js");
// console.log(pageRoutes);

//路由嵌套
//get option post patch put   postman上有最全的 路径名
// /*
// * get 拿来获取一个资源
// * post 提交一个需要在数据库增加的资源
// * options 跨域请求的时候出现
// * patch 针对服务器上某个资源进行修改（替换修改 改个属性 很少一部分）
// * delete 删除数据库上某个资源
// * put 针对某个资源进行修改（需要改一部分比patch改动的多）
// *
// * use() 可以解析任何一种请求
// * app.use(function(){}) 任意请求 任意数据都可以获取
// * */
//提供页面
//app.get("/pages",) 不用get
app.use("/pages",pageRoutes);


app.listen(3016);
//地址栏 输入 localhost：3016/pages/index