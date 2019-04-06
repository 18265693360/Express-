//推荐使用
const{Router} = require("express");
const router = Router();

//页面
router.get("/index",(req,res)=>{
    res.send(`
        <h1>我是主页</h1>>
        <a href="/page/details">跳转到详情页</a>
        pages
    `)
});

//详情页的路由
router.get("details",(req,res)=>{
    res.send(`
        <h1>我是详情页</h1>
        <a href="/page/index">跳转到主页</a>
    `)
});

module.exports = router;
//地址栏 输入 localhost：3016/pages/index