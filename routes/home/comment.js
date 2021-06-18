// 60用到评论集合
const { Comment } = require('../../model/comment');

module.exports = async(req, res) => {
    // 接收客户端传递的post表单参数
    const { content, uid, aid } = req.body;

    // 将评论内容存储到评论集合
    await Comment.create({
        content: content,
        uid: uid,
        aid: aid,
        time: new Date()
    });
    res.redirect('/home/article?id=' + aid);
    // res.send(req.body);
    // res.send('ok,评论成功');
}