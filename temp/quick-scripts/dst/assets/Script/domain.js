
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/domain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b1d1B1MeVE6ax/Q6Y5YyB2', 'domain');
// Script/domain.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    display: cc.Sprite,
    btn_share: {
      "default": null,
      type: cc.Node
    }
  },
  start: function start() {
    /*this._isShow = false;
     
    this.tex = new cc.Texture2D();*/
    if (typeof wx != "undefined") {
      var self = this;
      wx.showShareMenu({
        withShareTicket: true
      });
      wx.updateShareMenu({
        withShareTicket: true
      });
      this.btn_share.on('touchstart', function (event) {
        wx.shareAppMessage({
          title: '最强挑战赛排行，看见没？那个就是第一名的人~',
          imageUrl: canvas.toTempFilePathSync({
            x: 75,
            y: 300,
            width: 600,
            height: 480,
            destWidth: 500,
            destHeight: 400
          }),
          success: function success(res) {}
        });
      }, this);
      wx.onShareAppMessage(function () {
        // 用户点击了“转发”按钮
        return {
          title: '最强挑战赛，火热进行中~',
          imageUrl: "res/raw-assets/Texture/share/s1.png",
          success: function success(res) {}
        };
      });
      /*wx.login({
        success: function (loginCode) {
               wx.getUserInfo({
                  lang: 'zh_CN',
                  success: function (res) {
                       self.data = {
                          'type': 'user',
                          'name': res.userInfo.nickName,
                          'ava': res.userInfo.avatarUrl,
                          'sex': res.userInfo.gender,
                          'loginCode': loginCode.code
                      }
                       wx.request({
                          url: 'https://url/',
                          method: 'POST',
                          data: self.data,    //参数为键值对字符串
                          header: {
                              //设置参数内容类型为x-www-form-urlencoded
                              'Content-Type':'application/x-www-form-urlencoded',
                              'Accept': 'application/json'
                          },
                          success: function (res) {
                           },
                          fail: function (res) {
                               // console.log('f',res)
                          }
                      });
                   },
                  fail: function (res) {
                       // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                      if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1 ) {
                        // 处理用户拒绝授权的情况
                          wx.showModal({
                              title: '小卜:',
                              content: '登录后才可以在排行榜看到你的分数哦',
                              success: function (res) {
                                if (res.confirm) {
                                      wx.openSetting({
                                          success:function(res){
                                              wx.getUserInfo({
                                                  lang: 'zh_CN',
                                                  success: function (res) {
                                                       self.data = {
                                                          'type': 'user',
                                                          'name': res.userInfo.nickName,
                                                          'ava': res.userInfo.avatarUrl,
                                                          'sex': res.userInfo.gender,
                                                          'loginCode': loginCode.code
                                                      }
                                                       wx.request({
                                                          url: 'https://url/',
                                                          method: 'POST',
                                                          data: self.data,    //参数为键值对字符串
                                                          header: {
                                                              //设置参数内容类型为x-www-form-urlencoded
                                                              'Content-Type':'application/x-www-form-urlencoded',
                                                              'Accept': 'application/json'
                                                          },
                                                          success: function (res) {
                                                           },
                                                          fail: function (res) {
                                                               // console.log('f',res)
                                                          }
                                                      });
                                                  }
                                               });
                                          }
                                       })
                                }
                              },
                              fail: function (argument) {
                              }
                          });
                       }
                    }
              })
         }
      });*/
    }
  },
  _updaetSubDomainCanvas: function _updaetSubDomainCanvas() {
    /*if (!this.tex) {
        return;
    }
    this.tex.initWithElement(sharedCanvas);
    this.tex.handleLoadedTexture();
     
    this.display.spriteFrame = new cc.SpriteFrame(this.tex);*/
  },
  update: function update() {// this._updaetSubDomainCanvas();
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZG9tYWluLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGlzcGxheSIsIlNwcml0ZSIsImJ0bl9zaGFyZSIsInR5cGUiLCJOb2RlIiwic3RhcnQiLCJ3eCIsInNlbGYiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0IiwidXBkYXRlU2hhcmVNZW51Iiwib24iLCJldmVudCIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwiaW1hZ2VVcmwiLCJjYW52YXMiLCJ0b1RlbXBGaWxlUGF0aFN5bmMiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiZGVzdFdpZHRoIiwiZGVzdEhlaWdodCIsInN1Y2Nlc3MiLCJyZXMiLCJvblNoYXJlQXBwTWVzc2FnZSIsIl91cGRhZXRTdWJEb21haW5DYW52YXMiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUVKLEVBQUUsQ0FBQ0ssTUFESjtBQUVSQyxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBDLE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDUTtBQUZGO0FBRkgsR0FIUDtBQVdMQyxFQUFBQSxLQVhLLG1CQVdJO0FBQ0w7OztBQU1BLFFBQUcsT0FBT0MsRUFBUCxJQUFjLFdBQWpCLEVBQThCO0FBQzFCLFVBQUlDLElBQUksR0FBRyxJQUFYO0FBRUFELE1BQUFBLEVBQUUsQ0FBQ0UsYUFBSCxDQUFpQjtBQUNmQyxRQUFBQSxlQUFlLEVBQUU7QUFERixPQUFqQjtBQUlBSCxNQUFBQSxFQUFFLENBQUNJLGVBQUgsQ0FBbUI7QUFDakJELFFBQUFBLGVBQWUsRUFBRTtBQURBLE9BQW5CO0FBSUEsV0FBS1AsU0FBTCxDQUFlUyxFQUFmLENBQWtCLFlBQWxCLEVBQWdDLFVBQVdDLEtBQVgsRUFBbUI7QUFDL0NOLFFBQUFBLEVBQUUsQ0FBQ08sZUFBSCxDQUFtQjtBQUNmQyxVQUFBQSxLQUFLLEVBQUUsd0JBRFE7QUFFZkMsVUFBQUEsUUFBUSxFQUFFQyxNQUFNLENBQUNDLGtCQUFQLENBQTBCO0FBQ2hDQyxZQUFBQSxDQUFDLEVBQUUsRUFENkI7QUFFaENDLFlBQUFBLENBQUMsRUFBRSxHQUY2QjtBQUdoQ0MsWUFBQUEsS0FBSyxFQUFFLEdBSHlCO0FBSWhDQyxZQUFBQSxNQUFNLEVBQUUsR0FKd0I7QUFLaENDLFlBQUFBLFNBQVMsRUFBRSxHQUxxQjtBQU1oQ0MsWUFBQUEsVUFBVSxFQUFFO0FBTm9CLFdBQTFCLENBRks7QUFVZkMsVUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxHQUFULEVBQWMsQ0FDdEI7QUFYYyxTQUFuQjtBQWFILE9BZEQsRUFjRyxJQWRIO0FBZUFuQixNQUFBQSxFQUFFLENBQUNvQixpQkFBSCxDQUFxQixZQUFZO0FBQy9CO0FBQ0EsZUFBTztBQUNMWixVQUFBQSxLQUFLLEVBQUUsY0FERjtBQUVMQyxVQUFBQSxRQUFRLEVBQUUscUNBRkw7QUFHTFMsVUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxHQUFULEVBQWMsQ0FDdEI7QUFKSSxTQUFQO0FBTUQsT0FSRDtBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnR0g7QUFFSixHQXhKSTtBQTBKTEUsRUFBQUEsc0JBMUpLLG9DQTBKcUI7QUFDdEI7Ozs7Ozs7QUFTSCxHQXBLSTtBQXNLTEMsRUFBQUEsTUF0S0ssb0JBc0tLLENBQ047QUFDSDtBQXhLSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGRpc3BsYXk6IGNjLlNwcml0ZSxcbiAgICAgICAgYnRuX3NoYXJlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLyp0aGlzLl9pc1Nob3cgPSBmYWxzZTtcblxuICAgICAgICBcbiAgICAgICAgdGhpcy50ZXggPSBuZXcgY2MuVGV4dHVyZTJEKCk7Ki9cblxuXG4gICAgICAgIGlmKHR5cGVvZih3eCkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgd3gudXBkYXRlU2hhcmVNZW51KHtcbiAgICAgICAgICAgICAgd2l0aFNoYXJlVGlja2V0OiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5idG5fc2hhcmUub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgICAgICAgIHd4LnNoYXJlQXBwTWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5pyA5by65oyR5oiY6LWb5o6S6KGM77yM55yL6KeB5rKh77yf6YKj5Liq5bCx5piv56ys5LiA5ZCN55qE5Lq6ficsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBjYW52YXMudG9UZW1wRmlsZVBhdGhTeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzdFdpZHRoOiA1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0SGVpZ2h0OiA0MDBcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgLy8g55So5oi354K55Ye75LqG4oCc6L2s5Y+R4oCd5oyJ6ZKuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmnIDlvLrmjJHmiJjotZvvvIzngavng63ov5vooYzkuK1+JyxcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogXCJyZXMvcmF3LWFzc2V0cy9UZXh0dXJlL3NoYXJlL3MxLnBuZ1wiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8qd3gubG9naW4oe1xuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAobG9naW5Db2RlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFuZzogJ3poX0NOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndXNlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogcmVzLnVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYXZhJzogcmVzLnVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NleCc6IHJlcy51c2VySW5mby5nZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsb2dpbkNvZGUnOiBsb2dpbkNvZGUuY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3VybC8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc2VsZi5kYXRhLCAgICAvL+WPguaVsOS4uumUruWAvOWvueWtl+espuS4slxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6K6+572u5Y+C5pWw5YaF5a6557G75Z6L5Li6eC13d3ctZm9ybS11cmxlbmNvZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2YnLHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaU9TIOWSjCBBbmRyb2lkIOWvueS6juaLkue7neaOiOadg+eahOWbnuiwgyBlcnJNc2cg5rKh5pyJ57uf5LiA77yM6ZyA6KaB5YGa5LiA5LiL5YW85a655aSE55CGXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJNc2cuaW5kZXhPZignYXV0aCBkZW55JykgPiAtMSB8fCByZXMuZXJyTXNnLmluZGV4T2YoJ2F1dGggZGVuaWVkJykgPiAtMSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWkhOeQhueUqOaIt+aLkue7neaOiOadg+eahOaDheWGtVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflsI/ljZw6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfnmbvlvZXlkI7miY3lj6/ku6XlnKjmjpLooYzmppznnIvliLDkvaDnmoTliIbmlbDlk6YnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gub3BlblNldHRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZzogJ3poX0NOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3R5cGUnOiAndXNlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25hbWUnOiByZXMudXNlckluZm8ubmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F2YSc6IHJlcy51c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NleCc6IHJlcy51c2VySW5mby5nZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xvZ2luQ29kZSc6IGxvZ2luQ29kZS5jb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vdXJsLycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc2VsZi5kYXRhLCAgICAvL+WPguaVsOS4uumUruWAvOWvueWtl+espuS4slxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iuvue9ruWPguaVsOWGheWuueexu+Wei+S4ungtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2YnLHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7Ki9cblxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgX3VwZGFldFN1YkRvbWFpbkNhbnZhcyAoKSB7XG4gICAgICAgIC8qaWYgKCF0aGlzLnRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4LmluaXRXaXRoRWxlbWVudChzaGFyZWRDYW52YXMpO1xuICAgICAgICB0aGlzLnRleC5oYW5kbGVMb2FkZWRUZXh0dXJlKCk7XG5cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZGlzcGxheS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0aGlzLnRleCk7Ki9cblxuICAgIH0sXG5cbiAgICB1cGRhdGUgKCkge1xuICAgICAgICAvLyB0aGlzLl91cGRhZXRTdWJEb21haW5DYW52YXMoKTtcbiAgICB9XG5cbn0pO1xuIl19