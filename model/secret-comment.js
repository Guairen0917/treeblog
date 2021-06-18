// 67引入mongoose模块连接数据库
const mongoose = require('mongoose');

// 创建树洞集合规则
const secretCommentSchema = new mongoose.Schema({
    // 评论文章的id ref: 关联其他集合
    sid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Secret'
    },
    // 评论用户id
    uid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // 评论时间
    time: {
        type: Date
    },
    // 评论内容
    content: {
        type: String
    }
});
const secretComment = mongoose.model('secretComment', secretCommentSchema);

module.exports = {
    secretComment
};