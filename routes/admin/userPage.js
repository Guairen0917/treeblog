// 26导入用户集合构造函数
const { User } = require('../../model/user');

module.exports = async(req, res) => {
    // 35标识 当前访问用户管理页面
    req.app.locals.currentLink = 'user';

    // 27接受客户端传递过来的当前页数
    let page = req.query.page || 1;
    // 每页显示条数
    let pagesize = 2;
    // 查询用户数据总数
    let count = await User.countDocuments({});
    // 总页数
    let total = Math.ceil(count / pagesize);
    // 页码
    let start = (page - 1) * pagesize;

    // 26将用户信息从数据库中查询出来
    let users = await User.find({}).limit(pagesize).skip(start);

    // 渲染用户列表模板
    res.render('admin/user', {
        users: users,
        page: page,
        total: total
    });

    // 15传入username
    // res.render('admin/user', { msg: req.session.username });

};