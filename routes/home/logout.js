module.exports = (req, res) => {
    // 删除session
    req.session.destroy(function() {
        // 删除cookie
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
        // 59清除模板中的用户信息
        req.app.locals.userInfo = null;
    })
};