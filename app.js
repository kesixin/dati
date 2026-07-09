// app.js
var Api = require('utils/api.js');
App({
    onLaunch() {
        this.initApi();
        wx.Api = Api;
    },
    globalData: {
        userInfo: null
    },
    //初始化接口请求
    initApi() {
        var caller = function (url, oper, params, callback) {
            var header = {
                'Content-Type': 'application/json'
            };
            wx.request({
                url,
                method: oper,
                data: params,
                header,
                success: function (res) {
                    try {
                        wx.stopPullDownRefresh();
                    } catch (e) {}
                    callback(res.statusCode == 200 ? null : res, res.data);
                },
                fail: function (err) {
                    try {
                        wx.stopPullDownRefresh();
                    } catch (e) {}
                    callback(err);
                }
            });
        };
        Api.init(caller);
    }
})