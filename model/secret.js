// 66引入mongoose模块连接数据库
const mongoose = require('mongoose');

// 66创建文章集合规则
const secretSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '琴:旅行者，报上姓名!']
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    content: {
        type: String
    },
    state: {
        type: Number,
        // 默认 0 为使用状态，1为禁用状态
        default: 0
    }
})
const Secret = mongoose.model('Secret', secretSchema);

module.exports = {
    Secret
};