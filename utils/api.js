// api.js
var host = 'http://www.answerplus.com/routine/auth_api/'; //访问后端接口的url
var _caller;

function isFunc(f) {
    return f && 'function' === typeof (f);
}
//初始化请求参数方法
function init(caller) {
    if (isFunc(caller)) {
        _caller = caller;
        return;
    }
    throw 'Wrong type of init params';
}

/**
 * 统一的请求结构
 * @param  url 接口url
 * @param  oper 请求方式
 * @param  params 请求参数
 * @param  callback 回调
 */
function _req(url, oper, params, callback) {
    if (!params) params = {};
    _caller(host + url, oper, params, function (err, response) {
        if (isFunc(callback)) {
            if (err)
                callback(1101, err);
            else {
                callback(response.code, response.data || response.msg);
            }
        }
    });
}
module.exports.init = init;

//接口请求
module.exports.api = {
    index(callback) {
        _req('index', 'post', {}, callback);
    }
}