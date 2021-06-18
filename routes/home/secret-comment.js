// 60用到评论集合
const { secretComment } = require('../../model/secret-comment');

module.exports = async(req, res) => {
    // 接收客户端传递的post表单参数
    const { content, uid, sid } = req.body;

    // 将评论内容存储到评论集合
    await secretComment.create({
        content: content,
        uid: uid,
        sid: sid,
        time: new Date()
    });
    res.redirect('/home/secret-detail?id=' + sid);
    // res.send(req.body);
    // res.send('ok,评论成功');
}