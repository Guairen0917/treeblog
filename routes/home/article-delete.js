// 34引入
const { Article } = require('../../model/article');

module.exports = async(req, res) => {
    // res.send('ok');
    // 获取要删除的id
    await Article.findOneAndDelete({ _id: req.query.id });
    res.redirect('back');
}