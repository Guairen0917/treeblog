// 引用 express 框架
const express = require('express');
// 创建博客展示页面路由
const home = express.Router();

home.get('/', require('./home/index'));

// 51博客前台文章详情展示页面
home.get('/article', require('./home/article'));

// 60创建评论功能路由
home.post('/comment', require('./home/comment'));

// 创建首页
home.get('/default', require('./home/default'));

// 退出
home.get('/logout', require('./home/logout'));

// 注册页面
home.get('/register', require('./home/register'));
// 注册
home.post('/register', require('./home/register-fn'));

// 撰写博客
home.get('/article-write', require('./home/article-write'));
home.post('/article-add', require('./home/article-add'));

// 树洞
home.get('/secret', require('./home/secret'));
home.get('/secret-detail', require('./home/secret-detail'));

home.post('/secret-comment', require('./home/secret-comment'));

// 树洞发布
home.post('/secret-add', require('./home/secret-add'));

// 69个人信息修改
home.get('/user-modify', require('./home/user-modify'));
home.post('/user-modify-fn', require('./home/user-modify-fn'));

// 71个人博客列表
home.get('/article-mine', require('./home/article-mine'));

// 个人博客操作
home.get('/delete', require('./home/article-delete'));
home.get('/article-edit', require('./home/article-edit'));
home.post('/article-edit-fn', require('./home/article-edit-fn'));

// 将路由对象作为模块成员导出
module.exports = home;