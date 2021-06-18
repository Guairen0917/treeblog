const { Article } = require('../../model/article');
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    const id = req.query.id;
    const page = req.query.page;

    let result = await pagination(Article).find({ author: id }).page(page).size(4).display(5).exec();
    let temp = JSON.stringify(result);
    let resultList = JSON.parse(temp);
    // res.send(result);
    // res.send('ok');
    res.render('home/article-mine.art', {
        resultList: resultList
    });
}