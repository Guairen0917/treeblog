const { Comment } = require('../../model/comment');
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    // res.send('ok');
    req.app.locals.currentLink = 'comment';
    const page = req.query.page;
    let comments = await pagination(Comment).find().page(page).size(2).display(3).populate('author').exec();
    // res.send(comments);
    let temp = JSON.stringify(comments);
    let commentList = JSON.parse(temp);
    res.render('admin/comment.art', { commentList });
}