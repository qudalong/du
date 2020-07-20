// pages/home/home.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},

	scan() {
		wx.scanCode({
			success(res) {
				console.log(res)
			},
			fail() {
				console.log(error)
			}
		})
	},
	
	openBluetoothAdapter() {
	    const that = this
	    wx.openBluetoothAdapter({
	      success: (res) => {
	        console.log('openBluetoothAdapter success', res)
	        // 初始化成功，去搜索设备
	        this.startBluetoothDevicesDiscovery()
	      },
	      fail: (res) => {
	        if (res.errCode === 10001) {
	          // 蓝牙未打开，监听蓝牙状态
	          wx.onBluetoothAdapterStateChange( (res) =>{
	            console.log('onBluetoothAdapterStateChange', res)
	            if (res.available) {
	              this.startBluetoothDevicesDiscovery()
	            }
	          })
	        }
	      }
	    })
	  },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	toMy(){
		wx.navigateTo({
			url: '/pages/list/list'
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
