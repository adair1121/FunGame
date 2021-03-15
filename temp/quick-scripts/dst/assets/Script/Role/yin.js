
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Role/yin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a582vbvxxI7IF2NEVuQEEH', 'yin');
// Script/Role/yin.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {
    pop: {
      "default": null,
      url: cc.AudioClip
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    this.scale = 1;
    this.ori = {
      v: 10,
      a: -0.3
    };
    this.v = this.ori.v;
    this.a = this.ori.a;
    this.node.ori_v = 1;
    this.node.ori_a = 0.2;
    this.node.v = 1;
    this.node.a = 0.2;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (this.node.mode == "leitai" && this.node.y < -100) {
      return;
    }

    cc.audioEngine.playEffect(this.pop, false);

    switch (other.tag) {
      case 1:
        // 方块，圆球，树杆
        this.v = this.ori.v;
        break;

      case 2:
        // 弹簧
        this.v = this.ori.v * 1.5;
        break;
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    this.node.y += this.v;
    this.v += this.a;

    if (this.node.y < -500) {
      this.node.destroy();
      global.game.end();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUm9sZS95aW4uanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicG9wIiwidXJsIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwic2NhbGUiLCJvcmkiLCJ2IiwiYSIsIm5vZGUiLCJvcmlfdiIsIm9yaV9hIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsIm1vZGUiLCJ5IiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0IiwidGFnIiwidXBkYXRlIiwiZHQiLCJkZXN0cm95IiwiZ2FtZSIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsR0FBRyxFQUFFO0FBQ0QsaUJBQVMsSUFEUjtBQUVEQyxNQUFBQSxHQUFHLEVBQUVMLEVBQUUsQ0FBQ007QUFGUDtBQURHLEdBSFA7QUFVTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxHQUFMLEdBQVc7QUFDUEMsTUFBQUEsQ0FBQyxFQUFFLEVBREk7QUFFUEMsTUFBQUEsQ0FBQyxFQUFFLENBQUM7QUFGRyxLQUFYO0FBS0EsU0FBS0QsQ0FBTCxHQUFTLEtBQUtELEdBQUwsQ0FBU0MsQ0FBbEI7QUFDQSxTQUFLQyxDQUFMLEdBQVMsS0FBS0YsR0FBTCxDQUFTRSxDQUFsQjtBQUVBLFNBQUtDLElBQUwsQ0FBVUMsS0FBVixHQUFrQixDQUFsQjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsS0FBVixHQUFrQixHQUFsQjtBQUVBLFNBQUtGLElBQUwsQ0FBVUYsQ0FBVixHQUFjLENBQWQ7QUFDQSxTQUFLRSxJQUFMLENBQVVELENBQVYsR0FBYyxHQUFkO0FBQ0gsR0ExQkk7QUE0QkxJLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxRQUFHLEtBQUtMLElBQUwsQ0FBVU0sSUFBVixJQUFrQixRQUFsQixJQUE4QixLQUFLTixJQUFMLENBQVVPLENBQVYsR0FBYyxDQUFDLEdBQWhELEVBQXFEO0FBQ2pEO0FBQ0g7O0FBQ0RuQixJQUFBQSxFQUFFLENBQUNvQixXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS2pCLEdBQS9CLEVBQW9DLEtBQXBDOztBQUNBLFlBQU9ZLEtBQUssQ0FBQ00sR0FBYjtBQUNJLFdBQUssQ0FBTDtBQUNJO0FBQ0EsYUFBS1osQ0FBTCxHQUFTLEtBQUtELEdBQUwsQ0FBU0MsQ0FBbEI7QUFDSjs7QUFDQSxXQUFLLENBQUw7QUFDSTtBQUNBLGFBQUtBLENBQUwsR0FBUyxLQUFLRCxHQUFMLENBQVNDLENBQVQsR0FBYSxHQUF0QjtBQUNKO0FBUko7QUFVSCxHQTNDSTtBQTZDTDtBQUNBYSxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQixTQUFLWixJQUFMLENBQVVPLENBQVYsSUFBZSxLQUFLVCxDQUFwQjtBQUNBLFNBQUtBLENBQUwsSUFBVSxLQUFLQyxDQUFmOztBQUVBLFFBQUcsS0FBS0MsSUFBTCxDQUFVTyxDQUFWLEdBQWMsQ0FBRSxHQUFuQixFQUF3QjtBQUNwQixXQUFLUCxJQUFMLENBQVVhLE9BQVY7QUFDQTNCLE1BQUFBLE1BQU0sQ0FBQzRCLElBQVAsQ0FBWUMsR0FBWjtBQUNIO0FBQ0o7QUF0REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHJlcXVpcmUoXCJnbG9iYWxcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwb3A6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB1cmw6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjYWxlID0gMTtcbiAgICAgICAgdGhpcy5vcmkgPSB7XG4gICAgICAgICAgICB2OiAxMCxcbiAgICAgICAgICAgIGE6IC0wLjNcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudiA9IHRoaXMub3JpLnY7XG4gICAgICAgIHRoaXMuYSA9IHRoaXMub3JpLmE7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9yaV92ID0gMTtcbiAgICAgICAgdGhpcy5ub2RlLm9yaV9hID0gMC4yO1xuXG4gICAgICAgIHRoaXMubm9kZS52ID0gMTtcbiAgICAgICAgdGhpcy5ub2RlLmEgPSAwLjI7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICBpZih0aGlzLm5vZGUubW9kZSA9PSBcImxlaXRhaVwiICYmIHRoaXMubm9kZS55IDwgLTEwMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5wb3AsIGZhbHNlKTtcbiAgICAgICAgc3dpdGNoKG90aGVyLnRhZykge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIOaWueWdl++8jOWchueQg++8jOagkeadhlxuICAgICAgICAgICAgICAgIHRoaXMudiA9IHRoaXMub3JpLnY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAvLyDlvLnnsKdcbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB0aGlzLm9yaS52ICogMS41O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICB0aGlzLm5vZGUueSArPSB0aGlzLnY7XG4gICAgICAgIHRoaXMudiArPSB0aGlzLmE7XG5cbiAgICAgICAgaWYodGhpcy5ub2RlLnkgPCAtIDUwMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGdsb2JhbC5nYW1lLmVuZCgpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19