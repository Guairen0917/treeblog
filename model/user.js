// 07引入mongoose第三方模块
const mongoose = require('mongoose');

// 14hash.js加密密码
// 14导入bcrypt 密文加密
// const bcrypt = require('bcrypt');
// 23->25引入joi模块
const Joi = require('joi');

// 07创建用户集合
// 07创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        // 必填项
        required: true,
        // 防止 null under fined等通过 限制字段长度
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        // 保证邮箱地址不重复
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: { // admin 为超级管理员 normal 为普通用户 
        type: String,
        required: true
    },
    state: {
        type: Number,
        // 默认 0 为使用状态，1为禁用状态
        default: 0
    }
});

// 07创建集合
const User = mongoose.model('User', userSchema);

// 14异步加密
async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    const user = await User.create({
        username: 'xxv1',
        email: 'xxv@qq.com',
        password: pass,
        role: 'admin',
        state: 0
    });
}
// createUser();

// 25验证用户信息
const validateUser = user => {
    //23->25定义对象的验证规则
    const schema = {
        username: Joi.string().min(2).max(12).required().error(new Error('琴:旅行者，名字不对不能进团的哦!')),
        email: Joi.string().email().required().error(new Error('可莉:邮箱不对，可莉给你写的信就收不到了哦!')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('刻晴:我们之间的秘密也要遵守规范哦!')),
        role: Joi.string().valid('normal', 'admin').required().error(new Error('派蒙:超级会员，普通会员只能选一个哦!')),
        state: Joi.number().valid(0, 1).required().error(new Error('七七:状态不对，来根士力架吧!'))
    };

    // 23->25验证
    return Joi.validate(user, schema);
}

// 将用户集合作为模块成员导出
module.exports = {
    User,
    validateUser
}