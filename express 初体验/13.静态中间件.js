const express = require("express");
const app = express();
const path =  require("path")

// 这样项目就有静态资源解析能力
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
// app.use(express.static(path.join(__dirname, 'public')));

app.listen(3029);