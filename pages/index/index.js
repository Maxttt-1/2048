//获取应用实例
var app = getApp();

var config = {
    data: {
        disable: true,
        gameList: ['开始游戏']
    },

    onLoad: function() {
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    onReady: function() {
        // 页面渲染完毕
    },
    onShow: function() {
        // 页面展示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
};

//设置属性名"startName"到相应游戏页面的映射
config.data.gameList.forEach(function(v) {
    config['start' + v] = function() {

        config.data.disable = true;

        // 这里需要注意每个游戏文件夹名称需和js名称保持一致
        wx.navigateTo({
            url: '../' + '2048' + '/' + '2048'
        })
    }
});

Page(config);
