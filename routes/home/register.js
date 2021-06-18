module.exports = async(req, res, next) => {
    // 30获取用户参数
    const { message } = req.query;
    res.render('home/register', {
        message: message
    });
}