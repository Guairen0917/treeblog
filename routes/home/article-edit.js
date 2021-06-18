const { Article } = require('../../model/article');

module.exports = async(req, res) => {
    const id = req.query.id;
    let article = await Article.findOne({ _id: id });
    // res.send(article);
    res.render('home/article-edit.art', { article });
    // res.send('修改页面ok');
}