const { User } = require('../../model/user');

module.exports = async(req, res, next) => {
    // res.send(req.body);
    const { username, password } = req.body;
    const id = req.query.id;
    // res.send(req.query.id);
    await User.updateOne({ _id: id }, {
        username: username,
        password: password
    });
    req.session.destroy(function() {
        // 删除cookie
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
        // 59清除模板中的用户信息
        req.app.locals.userInfo = null;
    });
}