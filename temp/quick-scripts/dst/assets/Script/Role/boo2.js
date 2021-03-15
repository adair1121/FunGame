
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Role/boo2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8fa65cdcUtGi6lMSdjpEVJZ', 'boo2');
// Script/Role/boo2.js

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
    this.node.ori_xv = 1;
    this.node.ori_xa = 0.2;
    this.node.xv = 1;
    this.node.xa = 0.2;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (this.node.y > 300) {
      return;
    } // cc.audioEngine.playEffect(this.pop, false);


    switch (other.tag) {
      case 1:
        // 方块，圆球，树杆
        this.v = this.ori.v;
        break;

      case 2:
        // 弹簧
        this.v = this.ori.v * 1.5;
        break;

      case 1001:
        // 弹起
        this.ori.v += 1;
        this.v = this.ori.v;
        break;

      case 1002:
        // 再跳高点吧
        this.v = this.ori.v;
        break;

      case 1003:
        // 变小
        this.scale -= 0.2;
        this.scale = Math.max(0.3, this.scale);
        this.node.scaleX = this.scale;
        this.node.scaleY = this.scale;
        this.v = this.ori.v;
        break;

      case 1004:
        // 变大
        this.scale += 0.2;
        this.scale = Math.min(1.3, this.scale);
        this.node.scaleX = this.scale;
        this.node.scaleY = this.scale;
        this.v = this.ori.v;
        break;

      case 1005:
        // 每次弹跳额外+1分
        this.v = this.ori.v;
        break;

      case 1006:
        // 每次弹跳额外-1分
        this.v = this.ori.v;
        break;

      case 1007:
        // 水平移动加快
        this.node.ori_xv += 1;
        this.v = this.ori.v;
        break;

      case 1008:
        // 水平加速度加快
        this.node.ori_xa += 0.1;
        this.v = this.ori.v;
        break;

      case 1009:
        // 下降速度加快
        this.ori.a -= 0.1;
        this.v = this.ori.v;
        break;
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    this.node.y += this.v;
    this.v += this.a;

    if (this.node.y < -500) {
      this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvUm9sZS9ib28yLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBvcCIsInVybCIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsInNjYWxlIiwib3JpIiwidiIsImEiLCJub2RlIiwib3JpX3h2Iiwib3JpX3hhIiwieHYiLCJ4YSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ5IiwidGFnIiwiTWF0aCIsIm1heCIsInNjYWxlWCIsInNjYWxlWSIsIm1pbiIsInVwZGF0ZSIsImR0IiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsR0FBRyxFQUFFO0FBQ0QsaUJBQVMsSUFEUjtBQUVEQyxNQUFBQSxHQUFHLEVBQUVMLEVBQUUsQ0FBQ007QUFGUDtBQURHLEdBSFA7QUFVTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxHQUFMLEdBQVc7QUFDUEMsTUFBQUEsQ0FBQyxFQUFFLEVBREk7QUFFUEMsTUFBQUEsQ0FBQyxFQUFFLENBQUM7QUFGRyxLQUFYO0FBS0EsU0FBS0QsQ0FBTCxHQUFTLEtBQUtELEdBQUwsQ0FBU0MsQ0FBbEI7QUFDQSxTQUFLQyxDQUFMLEdBQVMsS0FBS0YsR0FBTCxDQUFTRSxDQUFsQjtBQUVBLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixDQUFuQjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsTUFBVixHQUFtQixHQUFuQjtBQUVBLFNBQUtGLElBQUwsQ0FBVUcsRUFBVixHQUFlLENBQWY7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ciBnbG9iYWwgPSByZXF1aXJlKFwiZ2xvYmFsXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcG9wOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdXJsOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgICAgIHRoaXMub3JpID0ge1xuICAgICAgICAgICAgdjogMTAsXG4gICAgICAgICAgICBhOiAtMC4zXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnYgPSB0aGlzLm9yaS52O1xuICAgICAgICB0aGlzLmEgPSB0aGlzLm9yaS5hO1xuXG4gICAgICAgIHRoaXMubm9kZS5vcmlfeHYgPSAxO1xuICAgICAgICB0aGlzLm5vZGUub3JpX3hhID0gMC4yO1xuXG4gICAgICAgIHRoaXMubm9kZS54diA9IDE7XG4gICAgICAgIHRoaXMubm9kZS54YSA9IDAuMjtcbiAgICB9LFxuXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmKHRoaXMubm9kZS55ID4gMzAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnBvcCwgZmFsc2UpO1xuICAgICAgICBcbiAgICAgICAgc3dpdGNoKG90aGVyLnRhZykge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIOaWueWdl++8jOWchueQg++8jOagkeadhlxuICAgICAgICAgICAgICAgIHRoaXMudiA9IHRoaXMub3JpLnY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAvLyDlvLnnsKdcbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB0aGlzLm9yaS52ICogMS41O1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTAwMTpcbiAgICAgICAgICAgICAgICAvLyDlvLnotbdcbiAgICAgICAgICAgICAgICB0aGlzLm9yaS52ICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy52ID0gdGhpcy5vcmkudjtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwMDI6XG4gICAgICAgICAgICAgICAgLy8g5YaN6Lez6auY54K55ZCnXG4gICAgICAgICAgICAgICAgdGhpcy52ID0gdGhpcy5vcmkudjtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwMDM6XG4gICAgICAgICAgICAgICAgLy8g5Y+Y5bCPXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSAtPSAwLjI7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IE1hdGgubWF4KDAuMywgdGhpcy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuc2NhbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMuc2NhbGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB0aGlzLm9yaS52O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwMDQ6XG4gICAgICAgICAgICAgICAgLy8g5Y+Y5aSnXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSArPSAwLjI7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZSA9IE1hdGgubWluKDEuMywgdGhpcy5zY2FsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuc2NhbGU7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMuc2NhbGU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB0aGlzLm9yaS52O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwMDU6XG4gICAgICAgICAgICAgICAgLy8g5q+P5qyh5by56Lez6aKd5aSWKzHliIZcbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB0aGlzLm9yaS52O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwMDY6XG4gICAgICAgICAgICAgICAgLy8g5q+P5qyh5by56Lez6aKd5aSWLTHliIZcbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB0aGlzLm9yaS52O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwMDc6XG4gICAgICAgICAgICAgICAgLy8g5rC05bmz56e75Yqo5Yqg5b+rXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9yaV94diArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMudiA9IHRoaXMub3JpLnY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTAwODpcbiAgICAgICAgICAgICAgICAvLyDmsLTlubPliqDpgJ/luqbliqDlv6tcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub3JpX3hhICs9IDAuMTtcbiAgICAgICAgICAgICAgICB0aGlzLnYgPSB0aGlzLm9yaS52O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDEwMDk6XG4gICAgICAgICAgICAgICAgLy8g5LiL6ZmN6YCf5bqm5Yqg5b+rXG4gICAgICAgICAgICAgICAgdGhpcy5vcmkuYSAtPSAwLjE7XG4gICAgICAgICAgICAgICAgdGhpcy52ID0gdGhpcy5vcmkudjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gdGhpcy52O1xuICAgICAgICB0aGlzLnYgKz0gdGhpcy5hO1xuXG4gICAgICAgIGlmKHRoaXMubm9kZS55IDwgLSA1MDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=