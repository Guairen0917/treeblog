// 57引入mongoose模块连接数据库
const mongoose = require('mongoose');

// 创建文章集合规则
const commentSchema = new mongoose.Schema({
    // 评论文章的id ref: 关联其他集合
    aid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
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
const Comment = mongoose.model('Comment', commentSchema);

module.exports = {
    Comment
};