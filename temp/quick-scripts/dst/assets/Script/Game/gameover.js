
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/gameover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99c9d9UYzlAtJzbwanWyZV6', 'gameover');
// Script/Game/gameover.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {
    item: {
      "default": null,
      type: cc.Node
    },
    all_rank: {
      "default": null,
      type: cc.Node
    },
    f_rank: {
      "default": null,
      type: cc.Node
    },
    w_rank: {
      "default": null,
      type: cc.Node
    },
    content: {
      "default": null,
      type: cc.Node
    },
    restart: {
      "default": null,
      type: cc.Node
    },
    btn_rank: {
      "default": null,
      type: cc.Node
    },
    btn_bbs: {
      "default": null,
      type: cc.Node
    },
    btn_msg: {
      "default": null,
      type: cc.Node
    },
    btn_cancel: {
      "default": null,
      type: cc.Node
    },
    btn_share: {
      "default": null,
      type: cc.Node
    },
    bbs: {
      "default": null,
      type: cc.Node
    },
    msg: {
      "default": null,
      type: cc.EditBox
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    global.rank = this;

    if (typeof wx != "undefined") {
      var info = wx.getSystemInfoSync();
      this.leitaiAd = wx.createBannerAd({
        adUnitId: 'adunit-xxxxxxxx',
        style: {
          left: 0,
          top: info.windowHeight - 110,
          width: info.windowWidth,
          height: 110
        }
      });
    }

    this.restart.on('touchstart', function (event) {
      this.leitaiAd.hide();
      cc.game.restart();
    }, this);
    this.btn_bbs.on('touchstart', function (event) {
      this.bbs.active = true;
    }, this);
    this.btn_cancel.on('touchstart', function (event) {
      this.bbs.active = false;
    }, this);
    this.btn_share.on('touchstart', function (event) {
      if (typeof wx != "undefined") {
        wx.shareAppMessage({
          title: '看见了吗？这位就是今天的擂主~',
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
      }
    }, this);
    global.msg = true;
    this.btn_msg.on('touchstart', function (event) {
      if (typeof wx != "undefined") {
        if (!global.msg) {
          wx.showModal({
            title: '小卜:',
            content: '你已经留言过了哟~',
            success: function success(res) {},
            fail: function fail(argument) {}
          });
          return;
        }

        var self = this;
        var msg = this.msg.string;

        if (msg.length == 0) {
          return;
        }

        global.msg = false;
        wx.showModal({
          title: '小卜:',
          content: '我收到了哟~',
          success: function success(res) {
            self.bbs.active = false;
          },
          fail: function fail(argument) {
            self.bbs.active = false;
          }
        });
        wx.login({
          success: function success(loginCode) {
            self.data = {};
            wx.request({
              url: 'https://url/',
              method: 'POST',
              data: self.data,
              header: {
                //设置参数内容类型为x-www-form-urlencoded
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
              },
              success: function success(res) {},
              fail: function fail(res) {// console.log('f',res)
              }
            });
          }
        });
      }
    }, this);
    /*this.rank_flag = "w";
    this.btn_rank.on('touchstart', function ( event ) {
        switch(this.rank_flag) {
            case "f":
                this.w_rank.active = true;
                this.f_rank.active = false;
                this.rank_flag = "w";
                this.btn_rank.getChildByName("btn_f_rank").active = false;
                this.btn_rank.getChildByName("btn_w_rank").active = true;
            break;
            case "w":
                this.w_rank.active = false;
                this.f_rank.active = true;
                this.rank_flag = "f";
                this.btn_rank.getChildByName("btn_w_rank").active = false;
                this.btn_rank.getChildByName("btn_f_rank").active = true;
            break;
        }
    }, this);*/
  },
  end: function end() {
    console.log(global.record);
    this.all_rank.active = true;
    global.gameover = true;
    this.showWrank(); // this.showFrank();
  },
  showFrank: function showFrank(argument) {
    /*var openDataContext = wx.getOpenDataContext();
    openDataContext.postMessage([
        {key: "num",value: global.num}
    ]);*/
  },
  showWrank: function showWrank(data) {
    this.all_rank.active = true;

    if (typeof wx != "undefined") {
      this.leitaiAd.show();
      var self = this;
      wx.login({
        success: function success(loginCode) {
          data.loginCode = loginCode.code;
          wx.request({
            url: 'https://url/',
            method: 'POST',
            data: data,
            //参数为键值对字符串
            header: {
              //设置参数内容类型为x-www-form-urlencoded
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            },
            success: function success(res) {
              for (var i = 0; i < res.data.length; i++) {
                self.genItem(i, res.data[i]);
              }
            },
            fail: function fail(res) {// console.log('f',res)
            }
          });
        }
      });
    }
  },
  genItem: function genItem(i, res) {
    var item = cc.instantiate(this.item);

    if (res.ava) {
      cc.loader.load({
        url: res.ava,
        type: 'png'
      }, function (err, img) {
        item.getChildByName("ava").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(img);
      });
    }

    item.getChildByName("raw").getComponent(cc.Label).string = i + 1;
    item.getChildByName("name").getComponent(cc.Label).string = res.name;
    item.getChildByName("num").getComponent(cc.Label).string = res.num; // item.active = true;

    item.parent = this.content;
  } // called every frame, uncomment this function to activate update callback

  /*update: function (dt) {
   },*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9nYW1lb3Zlci5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtIiwidHlwZSIsIk5vZGUiLCJhbGxfcmFuayIsImZfcmFuayIsIndfcmFuayIsImNvbnRlbnQiLCJyZXN0YXJ0IiwiYnRuX3JhbmsiLCJidG5fYmJzIiwiYnRuX21zZyIsImJ0bl9jYW5jZWwiLCJidG5fc2hhcmUiLCJiYnMiLCJtc2ciLCJFZGl0Qm94Iiwib25Mb2FkIiwicmFuayIsInd4IiwiaW5mbyIsImdldFN5c3RlbUluZm9TeW5jIiwibGVpdGFpQWQiLCJjcmVhdGVCYW5uZXJBZCIsImFkVW5pdElkIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsImhlaWdodCIsIm9uIiwiZXZlbnQiLCJoaWRlIiwiZ2FtZSIsImFjdGl2ZSIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwiaW1hZ2VVcmwiLCJjYW52YXMiLCJ0b1RlbXBGaWxlUGF0aFN5bmMiLCJ4IiwieSIsImRlc3RXaWR0aCIsImRlc3RIZWlnaHQiLCJzdWNjZXNzIiwicmVzIiwic2hvd01vZGFsIiwiZmFpbCIsImFyZ3VtZW50Iiwic2VsZiIsInN0cmluZyIsImxlbmd0aCIsImxvZ2luIiwibG9naW5Db2RlIiwiZGF0YSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJlbmQiLCJjb25zb2xlIiwibG9nIiwicmVjb3JkIiwiZ2FtZW92ZXIiLCJzaG93V3JhbmsiLCJzaG93RnJhbmsiLCJzaG93IiwiY29kZSIsImkiLCJnZW5JdGVtIiwiaW5zdGFudGlhdGUiLCJhdmEiLCJsb2FkZXIiLCJsb2FkIiwiZXJyIiwiaW1nIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZy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QkMsWUFBM0IsQ0FBd0NsRixFQUFFLENBQUNtRixNQUEzQyxFQUFtREMsV0FBbkQsR0FBaUUsSUFBSXBGLEVBQUUsQ0FBQ3FGLFdBQVAsQ0FBbUJMLEdBQW5CLENBQWpFO0FBQ0gsT0FGRDtBQUdIOztBQUVENUUsSUFBQUEsSUFBSSxDQUFDNkUsY0FBTCxDQUFvQixLQUFwQixFQUEyQkMsWUFBM0IsQ0FBd0NsRixFQUFFLENBQUNzRixLQUEzQyxFQUFrRC9CLE1BQWxELEdBQTJEa0IsQ0FBQyxHQUFHLENBQS9EO0FBQ0FyRSxJQUFBQSxJQUFJLENBQUM2RSxjQUFMLENBQW9CLE1BQXBCLEVBQTRCQyxZQUE1QixDQUF5Q2xGLEVBQUUsQ0FBQ3NGLEtBQTVDLEVBQW1EL0IsTUFBbkQsR0FBNERMLEdBQUcsQ0FBQ3FDLElBQWhFO0FBQ0FuRixJQUFBQSxJQUFJLENBQUM2RSxjQUFMLENBQW9CLEtBQXBCLEVBQTJCQyxZQUEzQixDQUF3Q2xGLEVBQUUsQ0FBQ3NGLEtBQTNDLEVBQWtEL0IsTUFBbEQsR0FBMkRMLEdBQUcsQ0FBQ3NDLEdBQS9ELENBVnNCLENBWXRCOztBQUVBcEYsSUFBQUEsSUFBSSxDQUFDcUYsTUFBTCxHQUFjLEtBQUsvRSxPQUFuQjtBQUNILEdBaFFJLENBa1FMOztBQUNBOzs7QUFuUUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHJlcXVpcmUoXCJnbG9iYWxcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBhbGxfcmFuazoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgZl9yYW5rOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICB3X3Jhbms6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3RhcnQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGJ0bl9yYW5rOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBidG5fYmJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBidG5fbXNnOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBidG5fY2FuY2VsOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBidG5fc2hhcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIGJiczoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgbXNnOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2xvYmFsLnJhbmsgPSB0aGlzO1xuXG4gICAgICAgIGlmKHR5cGVvZih3eCkgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgdmFyIGluZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgICAgICAgICAgdGhpcy5sZWl0YWlBZCA9IHd4LmNyZWF0ZUJhbm5lckFkKHtcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogJ2FkdW5pdC14eHh4eHh4eCcsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBpbmZvLndpbmRvd0hlaWdodCAtIDExMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluZm8ud2luZG93V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlc3RhcnQub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgICAgdGhpcy5sZWl0YWlBZC5oaWRlKCk7XG4gICAgICAgICAgICBjYy5nYW1lLnJlc3RhcnQoKTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5idG5fYmJzLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCBldmVudCApIHtcbiAgICAgICAgICAgIHRoaXMuYmJzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnRuX2NhbmNlbC5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICB0aGlzLmJicy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5idG5fc2hhcmUub24oJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgICAgaWYodHlwZW9mKHd4KSAhPSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgd3guc2hhcmVBcHBNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnnIvop4HkuoblkJfvvJ/ov5nkvY3lsLHmmK/ku4rlpKnnmoTmk4LkuLt+JyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IGNhbnZhcy50b1RlbXBGaWxlUGF0aFN5bmMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0ODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXN0V2lkdGg6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RIZWlnaHQ6IDQwMFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgZ2xvYmFsLm1zZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYnRuX21zZy5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICBpZih0eXBlb2Yod3gpICE9IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICBpZighZ2xvYmFsLm1zZykge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflsI/ljZw6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfkvaDlt7Lnu4/nlZnoqIDov4fkuoblk59+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHZhciBtc2cgPSB0aGlzLm1zZy5zdHJpbmc7XG5cbiAgICAgICAgICAgICAgICBpZihtc2cubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnbG9iYWwubXNnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflsI/ljZw6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+aIkeaUtuWIsOS6huWTn34nLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJicy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJicy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChsb2dpbkNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF0YSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3VybC8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHNlbGYuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/orr7nva7lj4LmlbDlhoXlrrnnsbvlnovkuLp4LXd3dy1mb3JtLXVybGVuY29kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2YnLHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8qdGhpcy5yYW5rX2ZsYWcgPSBcIndcIjtcbiAgICAgICAgdGhpcy5idG5fcmFuay5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICBzd2l0Y2godGhpcy5yYW5rX2ZsYWcpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZlwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLndfcmFuay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZfcmFuay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYW5rX2ZsYWcgPSBcIndcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5fcmFuay5nZXRDaGlsZEJ5TmFtZShcImJ0bl9mX3JhbmtcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuX3JhbmsuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fd19yYW5rXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53X3JhbmsuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZl9yYW5rLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFua19mbGFnID0gXCJmXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuX3JhbmsuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fd19yYW5rXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bl9yYW5rLmdldENoaWxkQnlOYW1lKFwiYnRuX2ZfcmFua1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTsqL1xuXG4gICAgfSxcblxuICAgIGVuZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGdsb2JhbC5yZWNvcmQpXG4gICAgICAgIHRoaXMuYWxsX3JhbmsuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgZ2xvYmFsLmdhbWVvdmVyID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnNob3dXcmFuaygpO1xuICAgICAgICAvLyB0aGlzLnNob3dGcmFuaygpO1xuICAgIH0sXG5cbiAgICBzaG93RnJhbms6IGZ1bmN0aW9uKGFyZ3VtZW50KSB7XG4gICAgICAgIC8qdmFyIG9wZW5EYXRhQ29udGV4dCA9IHd4LmdldE9wZW5EYXRhQ29udGV4dCgpO1xuICAgICAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2UoW1xuICAgICAgICAgICAge2tleTogXCJudW1cIix2YWx1ZTogZ2xvYmFsLm51bX1cbiAgICAgICAgXSk7Ki9cbiAgICB9LFxuXG4gICAgc2hvd1dyYW5rOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHRoaXMuYWxsX3JhbmsuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYodHlwZW9mKHd4KSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgICAgIHRoaXMubGVpdGFpQWQuc2hvdygpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGxvZ2luQ29kZSkge1xuXG4gICAgICAgICAgICAgICAgZGF0YS5sb2dpbkNvZGUgPSBsb2dpbkNvZGUuY29kZTtcblxuICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL3VybC8nLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSwgICAgLy/lj4LmlbDkuLrplK7lgLzlr7nlrZfnrKbkuLJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iuvue9ruWPguaVsOWGheWuueexu+Wei+S4ungtd3d3LWZvcm0tdXJsZW5jb2RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzLmRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmdlbkl0ZW0oaSwgcmVzLmRhdGFbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZicscmVzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZW5JdGVtOiBmdW5jdGlvbihpLCByZXMpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pO1xuICAgICAgICBpZihyZXMuYXZhKSB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7dXJsOnJlcy5hdmEsIHR5cGU6ICdwbmcnfSwgZnVuY3Rpb24gKGVyciwgaW1nKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5nZXRDaGlsZEJ5TmFtZShcImF2YVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShpbWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtLmdldENoaWxkQnlOYW1lKFwicmF3XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gaSArIDE7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcmVzLm5hbWU7XG4gICAgICAgIGl0ZW0uZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByZXMubnVtO1xuXG4gICAgICAgIC8vIGl0ZW0uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMuY29udGVudDtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvKnVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICB9LCovXG59KTtcbiJdfQ==