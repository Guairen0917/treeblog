// 41导入文章集合构造函数
const { Article } = require('../../model/article');

// 43导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    // 43分页
    const page = req.query.page;

    // 35标识 当前访问文章管理页面
    req.app.locals.currentLink = 'article';
    // 41 .populate('author')
    // https://blog.csdn.net/qq_49002903/article/details/112541719 解决办法 .lean()
    // let articles = await Article.find().populate('author').lean();

    // 43page 指定当前页 size 指定显示条数 display 指定客户端显示页码数 exec 请求查询数据库
    let articles = await pagination(Article).find().page(page).size(2).display(3).populate('author').exec();
    // 使用临时变量存储
    let temp = JSON.stringify(articles);
    let articleList = JSON.parse(temp);
    // res.send(articles);
    res.render('admin/article.art', {
        articleList: articleList
    });
}