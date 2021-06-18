// 53查询文章
const { Article } = require('../../model/article');
// 53导入mongoose-sex-page模块 分页
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    // 55接收当前页码
    const page = req.query.page;

    // 53从数据库中查询数据
    let result = await pagination(Article).find().page(page).size(4).display(5).populate('author').exec();
    let temp = JSON.stringify(result);
    let resultList = JSON.parse(temp);
    // res.send(result);
    // return;

    res.render('home/default.art', {
        resultList: resultList
    });
}