// pages/personal/personal.js
var app = getApp();
var e = [{
  icon: "/images/icon_grade.png",
  title: "我的成绩",
  msg: "",
  showRight: 1
},{
  icon: "/images/icon_center_tj.png",
  title: "分享好友",
  msg: "",
  showRight: 1
}, 
{
  icon: "/images/icon_center_msg.png",
  title: "在线客服",
  msg: "",
  showRight: 1
}, 
{
  icon: "/images/icon_center_download.png",
  title: "关于我们",
  msg: "",
  showRight: 1
}];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cellList: e,
    userInfo: {},
    is_login: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  login() {
    this.setData({
      is_login: !this.data.is_login
    })
  },
  getLogin: function(){
    this.login()
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})