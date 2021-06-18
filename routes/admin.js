// 引用 express 框架
const express = require('express');
// 创建博客展示页面路由
const admin = express.Router();

// 渲染登录页面
admin.get('/login', require('./admin/loginPage'));
// 10 实现登录功能
admin.post('/login', require('./admin/login'));

// 05创建用户列表路由
admin.get('/user', require('./admin/userPage'));

// 20实现退出功能
admin.get('/logout', require('./admin/logout'));

// 21创建用户编辑页面路由
admin.get('/user-edit', require('./admin/user-edit'));
// 21创建实现新增用户功能
admin.post('/user-edit', require('./admin/user-edit-fn'));

// 31创建实现修改用户功能
admin.post('/user-modify', require('./admin/user-modify'));

// 34创建实现删除用户功能
admin.get('/delete', require('./admin/user-delete'));

// 35文章列表页面路由
admin.get('/article', require('./admin/article'));
// 35文章编辑页面路由
admin.get('/article-edit', require('./admin/article-edit'));

// 37实现文章添加功能路由
admin.post('/article-add', require('./admin/article-add'));

// 70评论管理
admin.get('/comment', require('./admin/comment'));

// 将路由对象作为模块成员导出
module.exports = admin;