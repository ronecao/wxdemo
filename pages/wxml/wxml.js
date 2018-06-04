// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentView: 'blue',
    nodes:[
      {
        name:'img',
        attrs:{
          class :'image',
          src:'../../assets/images/demo-3.jpg'
        }
      },
      {
        name: 'h3',
        attrs:{
          class:'header'
        },
        children:[
          {
            type: 'text',
            text:'kkk'
          }
            

        ]
      }

    ]
  
  },
  setScrollView(event) {
    this.setData({
      currentView: event.target.dataset.view
    })
  },
  gotoswiper(event) {
    wx.navigateTo({
      url: 'swiper',
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  tapHandler(event){
    console.log(event)
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