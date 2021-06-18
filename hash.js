// 14导入bcrypt 密文加密
const bcrypt = require('bcrypt');

async function run() {
    // 生成随机字符串 
    // 数值与随机字符串复杂度正相关 默认值为10
    await bcrypt.genSalt(10);
    // 对密码加密 
    const result = await bcrypt.hash('123456', salt);
    console.log(salt);
}

run();