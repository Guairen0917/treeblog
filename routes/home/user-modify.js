const { User } = require('../../model/user');

module.exports = async(req, res) => {
    const id = req.query.id;
    let user = await User.findOne({ _id: id });

    res.render('home/user-modify.art', { user });
    // res.send('修改页面ok');
}