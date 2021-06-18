// 获取表单中的内容
function serializeToJson(form) {
    var result = {};
    // [{name:'name',value:'用户提交的value'}]
    var f = form.serializeArray();
    f.forEach(function(item) {
        result[item.name] = item.value;
    });
    return result;
}