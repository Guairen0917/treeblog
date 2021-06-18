const guard = (req, res, next) => {
    // 1.判断用户访问的是否是登录页面 2.判断用户的登录状态
    if (req.url != '/login' && !req.session.username) {
        res.redirect('/admin/login');
    } else {
        // 58登录状态的普通用户
        if (req.session.role == 'normal') {
            // 跳转到博客首页 阻止程序向下执行 访问后台时强制返回这个网页
            // return res.redirect('/home/');
            return res.redirect('/home/default');
        }
        // 登录 -> 放行  不登录 -> 重定向login页面
        next();
    }
}

module.exports = guard;