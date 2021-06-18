const { Article } = require('../../model/article');

module.exports = async(req, res, next) => {
    // res.send(req.body);
    const { title, content } = req.body;
    const id = req.query.id;

    // let result = await Article.find({ _id: id });

    await Article.updateOne({ _id: id }, {
        title: title,
        publishDate: new Date(),
        content: content
    });

    res.redirect('/home/');
}