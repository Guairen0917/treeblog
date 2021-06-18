// 11导入用户集合构造函数
// const { User } = require('../model/user');
const { User } = require('../../model/user');

// 14导入bcrypt 密文加密
// const bcrypt = require('bcrypt');

module.exports = async(req, res) => {
    // 接受请求参数
    // res.send(req.body);
    const { email, password } = req.body;
    // 判断用户没有输入邮箱
    if (email.trim().length == 0 || password.trim().length == 0) {
        return res.status(400).render('admin/error', { msg: '邮箱或密码错误' });
    }
    // 根据邮箱查询用户信息
    // 查询到用户 user变量值为对象类型 对象中存储用户信息
    // 没有查询到用户 user变量为空
    let user = await User.findOne({ email });
    // 查询到用户
    if (user) {
        // 14比对密码
        // let isValid = bcrypt.compare(password,user.password);
        // if(isValid){
        if (password == user.password) {
            // 登录成功
            // 将用户名存储在请求对象中
            req.session.username = user.username;

            // 58将用户角色存储在session对象中
            req.session.role = user.role;

            // res.send('登录成功');
            req.app.locals.userInfo = user;
            // 58判断用户角色分别跳转不同登录页面
            if (user.role == 'admin') {
                // 重定向到用户管理列表页面
                res.redirect('/admin/user');
            } else {
                // 58重定向到博客 
                res.redirect('/home/default');
                // res.redirect('/home/');
            }

        } else {
            // 没有查询到用户
            res.status(400).render('admin/error', { msg: '邮箱或密码错误' });
        }
    } else {
        res.status(400).render('admin/error', { msg: '邮箱或密码错误' });
    }
}