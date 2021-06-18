// 56导入文章集合构造函数
const { Article } = require('../../model/article');

// 61导入评论集合构造函数
const { Comment } = require('../../model/comment');

module.exports = async(req, res) => {
    // 56接收文章id
    const id = req.query.id;
    // 根据id查询文章详细信息
    let result = await Article.findOne({ _id: id }).populate('author').exec();
    let temp = JSON.stringify(result);
    let article = JSON.parse(temp);

    let comments = await Comment.find({ aid: id }).populate('uid');
    let temp2 = JSON.stringify(comments);
    let commentList = JSON.parse(temp2);
    // res.send(article);
    // return;
    // res.send('博客详情页面');
    res.render('home/article.art', { article, commentList });
}