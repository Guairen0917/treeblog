module.exports = (req, res) => {
    // 35标识 当前访问文章管理页面
    req.app.locals.currentLink = 'article';

    res.render('admin/article-edit.art');
}