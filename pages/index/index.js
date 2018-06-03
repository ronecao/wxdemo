import helper from '../../libs/helper/helper'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    greeting: ''

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('加载')
    this.setData(
      {
        greeting:helper.randItem(app.globaldata.greeting)
      }
    )
  },
  tapGreeting(event){
    console.log(event)
    this.setData({
      greeting:helper.randItem(app.globaldata.greeting)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('显示')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('卸载')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.tapGreeting('ok')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  onPageScrool(cal){
    console.log('onPageScrool'+cal);

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
