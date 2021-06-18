// 34引入
const { User } = require('../../model/user');

module.exports = async(req, res) => {
    // 获取要删除的id
    await User.findOneAndDelete({ _id: req.query.id });
    res.redirect('/admin/user');
}