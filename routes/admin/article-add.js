// 38引入formidable模块 处理表单 文件上传
const formidable = require('formidable');
const path = require('path');

// 40
const { Article } = require('../../model/article');

module.exports = (req, res) => {
    // 38创建表单解析对象
    const form = new formidable.IncomingForm();
    // 上传文件到公共资源文件夹
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    // 保留上传文件后缀
    form.keepExtensions = true;
    // 解析表单 err:错误对象 存储错误信息或为null  fields:对象类型 保存表单数据   files:对象类型 保存上传相关文件数据
    form.parse(req, async(err, fields, files) => {
        // res.send(files.cover.path.split('public')[1]);
        await Article.create({
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.path.split('public')[1],
            content: fields.content,
        });
        res.redirect('/admin/article');
    })

}