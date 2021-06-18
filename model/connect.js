// 07引入mongoose第三方模块
const mongoose = require('mongoose');

// 49导入config模块
const config = require('config');

// 07链接数据库
// mongoose.connect('mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}')
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb://${config.get('db.host')}/${config.get('db.name')}`, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => { console.log('数据库链接成功') })
    .catch(() => { console.log('数据库链接失败') })