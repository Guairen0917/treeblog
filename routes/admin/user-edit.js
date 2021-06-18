// 30引入用户集合构造函数
const { User } = require('../../model/user');

module.exports = async(req, res) => {
    // 35标识 当前访问用户管理页面
    req.app.locals.currentLink = 'user';
    // 30获取用户参数
    const { message, id } = req.query;
    // 如果有id参数则为修改操作 否则为添加操作
    if (id) {
        // 修改
        let user = await User.findOne({ _id: id });
        // 渲染用户编辑页面
        res.render('admin/user-edit', {
            message: message,
            user: user,
            link: '/admin/user-modify?id=' + id,
            button: '修改'
        });

    } else {
        // 添加
        res.render('admin/user-edit', {
            message: message,
            link: '/admin/user-edit',
            button: '添加'
        });
    }

}