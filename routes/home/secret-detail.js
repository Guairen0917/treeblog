// 66导入树洞集合构造函数
const { Secret } = require('../../model/secret');
// 67导入评论集合构造函数
const { secretComment } = require('../../model/secret-comment');

module.exports = async(req, res) => {
    // 56接收树洞id
    const id = req.query.id;
    // 根据id查询树洞详细信息
    let result = await Secret.findOne({ _id: id }).populate('author').exec();;
    let temp = JSON.stringify(result);
    let secret = JSON.parse(temp);

    let comments = await secretComment.find({ sid: id }).populate('uid');
    let temp2 = JSON.stringify(comments);
    let commentList = JSON.parse(temp2);

    // res.send('树洞详情'); res.send(secret);
    res.render('home/secret-detail.art', {
        secret,
        commentList
    });
};