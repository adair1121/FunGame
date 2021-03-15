
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/prop/big.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48cd0KrQ/hL5J8ymuRBGSZX', 'big');
// Script/prop/big.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    // this.node.y = 100 + this.node.seed * 50;
    this.tips = ["变大吧！" + "\n每次分数额外+" + global.bonus, "扣1分！" + "\n每次分数额外+" + global.bonus];
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 0) {
      var finished = cc.callFunc(function () {
        this.node.destroy();
      }, this);
      var action = cc.sequence(cc.fadeOut(0.4), finished);
      this.node.runAction(action);
      var tip = this.tips[Math.floor(Math.random() * this.tips.length)]; // global.game.setTip(tip);s

      global.game.setNum(-1);
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (this.node.x + this.node.parent.x < -400) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvcHJvcC9iaWcuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwidGlwcyIsImJvbnVzIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsInRhZyIsImZpbmlzaGVkIiwiY2FsbEZ1bmMiLCJub2RlIiwiZGVzdHJveSIsImFjdGlvbiIsInNlcXVlbmNlIiwiZmFkZU91dCIsInJ1bkFjdGlvbiIsInRpcCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsImdhbWUiLCJzZXROdW0iLCJ1cGRhdGUiLCJkdCIsIngiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FDUixTQUFTLFdBQVQsR0FBdUJQLE1BQU0sQ0FBQ1EsS0FEdEIsRUFFUixTQUFTLFdBQVQsR0FBdUJSLE1BQU0sQ0FBQ1EsS0FGdEIsQ0FBWjtBQUlILEdBZEk7QUFnQkxDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxRQUFHRCxLQUFLLENBQUNFLEdBQU4sSUFBYSxDQUFoQixFQUFtQjtBQUNmLFVBQUlDLFFBQVEsR0FBR1gsRUFBRSxDQUFDWSxRQUFILENBQVksWUFBVztBQUNsQyxhQUFLQyxJQUFMLENBQVVDLE9BQVY7QUFDSCxPQUZjLEVBRVosSUFGWSxDQUFmO0FBR0EsVUFBSUMsTUFBTSxHQUFHZixFQUFFLENBQUNnQixRQUFILENBQVloQixFQUFFLENBQUNpQixPQUFILENBQVcsR0FBWCxDQUFaLEVBQTZCTixRQUE3QixDQUFiO0FBQ0EsV0FBS0UsSUFBTCxDQUFVSyxTQUFWLENBQW9CSCxNQUFwQjtBQUVBLFVBQUlJLEdBQUcsR0FBRyxLQUFLZCxJQUFMLENBQVVlLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBS2pCLElBQUwsQ0FBVWtCLE1BQXJDLENBQVYsQ0FBVixDQVBlLENBUWY7O0FBRUF6QixNQUFBQSxNQUFNLENBQUMwQixJQUFQLENBQVlDLE1BQVosQ0FBbUIsQ0FBQyxDQUFwQjtBQUNIO0FBQ0osR0E3Qkk7QUErQkw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFDbEIsUUFBRyxLQUFLZCxJQUFMLENBQVVlLENBQVYsR0FBYyxLQUFLZixJQUFMLENBQVVnQixNQUFWLENBQWlCRCxDQUEvQixHQUFtQyxDQUFDLEdBQXZDLEVBQTRDO0FBQ3hDLFdBQUtmLElBQUwsQ0FBVUMsT0FBVjtBQUNIO0FBQ0o7QUFwQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHJlcXVpcmUoXCJnbG9iYWxcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUueSA9IDEwMCArIHRoaXMubm9kZS5zZWVkICogNTA7XG4gICAgICAgIHRoaXMudGlwcyA9IFtcbiAgICAgICAgICAgIFwi5Y+Y5aSn5ZCn77yBXCIgKyBcIlxcbuavj+asoeWIhuaVsOmineWklitcIiArIGdsb2JhbC5ib251cyxcbiAgICAgICAgICAgIFwi5omjMeWIhu+8gVwiICsgXCJcXG7mr4/mrKHliIbmlbDpop3lpJYrXCIgKyBnbG9iYWwuYm9udXNcbiAgICAgICAgXTtcbiAgICB9LFxuXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MuZmFkZU91dCgwLjQpLCBmaW5pc2hlZCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG5cbiAgICAgICAgICAgIHZhciB0aXAgPSB0aGlzLnRpcHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50aXBzLmxlbmd0aCldO1xuICAgICAgICAgICAgLy8gZ2xvYmFsLmdhbWUuc2V0VGlwKHRpcCk7c1xuXG4gICAgICAgICAgICBnbG9iYWwuZ2FtZS5zZXROdW0oLTEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5ub2RlLnggKyB0aGlzLm5vZGUucGFyZW50LnggPCAtNDAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19