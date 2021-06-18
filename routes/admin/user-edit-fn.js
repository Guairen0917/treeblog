// 23引入joi模块
// const Joi = require('joi');
// 24引入用户集合的构造函数
const { User, validateUser } = require('../../model/user');
// 24补充：密码加密处理
// const bcrypt = require('bcrypt');

module.exports = async(req, res, next) => {
    // 23定义对象的验证规则

    try {
        //25
        await validateUser(req.body);
        // await Joi.validate(req.body, schema);
    } catch (e) {
        // 验证失败 直接重定向回用户添加页面
        // return res.redirect(`/admin/user-edit?message=${e.message}`);
        //25 JSON.stringify() 将对象数据类型转换为字符串数据类型
        return next(JSON.stringify({ path: '/admin/user-edit', message: e.message }));
    }
    // 24根据邮箱查询用户是否存在
    let user = await User.findOne({ email: req.body.email });
    // 查询到记录 邮箱被占用
    if (user) {
        // 重定向回添加页面
        // return res.redirect(`/admin/user-edit?message=可莉:不可使用别人的邮箱欺骗可莉感情哦!`);
        //25
        return next(JSON.stringify({ path: '/admin/user-edit', message: '可莉:不可以使用别人的邮箱欺骗可莉感情哦!' }));
    }
    // 密码加密处理 生产随机字符串
    // const salt = await bcrypt.genSalt(10);
    // const password = await bcrypt.hash(req.body.password, salt);
    // 替换密码
    // req.body.password = password;

    // 将用户信息添加到数据库中
    await User.create(req.body);
    res.redirect('/admin/user');
}