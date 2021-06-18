// 66导入树洞集合构造函数
const { Secret } = require('../../model/secret');

// 66导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');

module.exports = async(req, res) => {
    const page = req.query.page;
    req.app.locals.currentLink = 'secret';

    // 70
    const id = req.query.id;
    // 查询所有可见树洞
    let secrets = await pagination(Secret).find({ state: 0 }).page(page).size(8).display(3).populate('author').exec();

    // 查询个人所有树洞
    let secret = await pagination(Secret).find({ author: id }).page(page).size(8).display(3).populate('author').exec();
    let temp2 = JSON.stringify(secret);
    let secretLists = JSON.parse(temp2);

    // 将 secrets 转化格式
    let temp = JSON.stringify(secrets);
    let secretList = JSON.parse(temp);

    res.render('home/secret.art', {
        secretList: secretList,
        secretLists: secretLists
    });
    // res.send('树洞页面');
    // res.render('home/register');
}