// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header :{
      content:'views',
      class:'header',
      show:true
    },
    fruits:[
      { id: 1, fruit: "apple" },
      { id: 2, fruit: "banana" }, 
      { id: 3, fruit: "oriange" },
    ],
    input_data: [
      { id: 1, unique: "unique1" },
      { id: 2, unique: "unique2" },
      { id: 3, unique: "unique3" },
      { id: 4, unique: "unique4" },
    ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})