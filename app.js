// 02引用 express 框架
const express = require('express');
// 02创建网站服务器
const app = express();
// 03处理路径
const path = require('path');

// 10引入body-parser模块 处理post请求参数
const bodyParser = require('body-parser');
// 17导入express-session模块
const session = require('express-session');

// 42导入art-template模板引擎
const template = require('art-template');
// 42导入dateformat模块 全局处理日期
const dateFormat = require('dateformat');

// 46导入morgan模块 处理控制台
const morgan = require('morgan');

// 48导入config模块 配置环境需求文件
const config = require('config');

// 03开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));
// 03告诉express 框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
// 03告诉express 框架模板默认后缀
app.set('view engine', 'art');
// 03模板引擎
app.engine('art', require('express-art-template'));

// 42向模板内部导入dateFormat变量
template.defaults.imports.dateFormat = dateFormat;

console.log(config.get('title'));

// 46区分生产环境开发环境 环境变量中配置
if (process.env.NODE_ENV == 'development') {
    // 开发环境
    console.log('当前为开发环境');
    // 将开发环境中客户端发送到服务器端的请求信息打印到控制台
    app.use(morgan('dev'));
} else {
    // 生产环境
    console.log('当前为生产环境');
}

// 02引入路由模块
const home = require('./routes/home');
const admin = require('./routes/admin');

// 10处理post请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 17配置session
// 为 express-session 模块指定“resave ”和“saveUninitialized ”选项 防止cmd警告
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret key',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    }
}));

// 19拦截请求 判断用户登录状态
app.use('/admin', require('./middleware/loginGuard'));

// 02为路由匹配请求路径
app.use('/home', home);
app.use('/admin', admin);

// 07引入数据库入口文件
require('./model/connect');
// require('./model/user');

//25错误处理中间件
app.use((err, req, res, next) => {
    // JSON.parse() 将字符串对象转换为对象类型
    const result = JSON.parse(err);
    // 31多个参数拼接
    // { path: '/admin/user-edit', message: '刻晴:暗号不对不能修改信息的哦!', id: id }
    let params = [];
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr]);
        }
    }
    res.redirect(`${result.path}?${params.join('&')}`);
})

// 01监听端口
app.listen(80);
console.log('网站服务器启动成功，请访问localhost');