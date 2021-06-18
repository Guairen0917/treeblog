// 68用到树洞集合
const { Secret } = require('../../model/secret');

module.exports = async(req, res) => {
    // 接收客户端传递的post表单参数
    const { content, author, state } = req.body;

    // 将评论内容存储到评论集合
    await Secret.create({
        author: author,
        content: content,
        publishDate: new Date(),
        state: state
    });
    res.redirect('/home/secret');
    // res.send(req.body);
    // res.send('ok,评论成功');
}