//35引入mongoose模块连接数据库
const mongoose = require('mongoose');

//36创建文章集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: 4,
        maxlength: 40,
        required: [true, '胡桃:文章没有标题，查阅不到了哦!']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '琴:旅行者，报上姓名!']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String
    }
})
const Article = mongoose.model('Article', articleSchema);

module.exports = {
    Article
};