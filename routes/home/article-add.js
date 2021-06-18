const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');

module.exports = (req, res) => {
    const form = new formidable.IncomingForm();
    // 上传文件到公共资源文件夹
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    // 保留上传文件后缀
    form.keepExtensions = true;

    form.parse(req, async(err, fields, files) => {
        // res.send(files.cover.path.split('public')[1]);
        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content,
        });
        res.redirect('/home/');
    });
}