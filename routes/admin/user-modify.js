// 31引入用户集合构造函数
const { User } = require('../../model/user');
// 加密比对 无加密忽略
// const bcrypt = require('bcrypt');

module.exports = async(req, res, next) => {
    //接受客户端提交的请求参数
    const { username, email, role, state, password } = req.body;
    const id = req.query.id;

    let user = await User.findOne({ _id: id });
    // 加密模块 密码比对
    // const isValid = bcrypt.compare(req.body.password, user.password);
    // if (isValid) {
    if (password == user.password) {
        // 将用户信息更新到数据库 不能更新密码到数据库中
        await User.updateOne({ _id: id }, {
            username: username,
            email: email,
            role: role,
            state: state
        });
        // 修改成功后，重定向页面到用户编辑页面
        res.redirect('/admin/user');
    } else {
        // 32密码比对失败
        let obj = { path: '/admin/user-edit', message: '刻晴:暗号不对不能修改信息的哦!', id: id }
        next(JSON.stringify(obj));
    }
}