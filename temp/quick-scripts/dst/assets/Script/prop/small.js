
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/prop/small.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e7a7jxhBtN4bi9421OvSWF', 'small');
// Script/prop/small.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    // this.node.y = 100 + this.node.seed * 50;
    this.tips = ["变小~" + "\n每次分数额外+" + global.bonus, "2分~" + "\n每次分数额外+" + global.bonus];
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 0) {
      var finished = cc.callFunc(function () {
        this.node.destroy();
      }, this);
      var action = cc.sequence(cc.fadeOut(0.4), finished);
      this.node.runAction(action);
      var tip = this.tips[Math.floor(Math.random() * this.tips.length)]; // global.game.setTip(tip);

      global.game.setNum(2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvcHJvcC9zbWFsbC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ0aXBzIiwiYm9udXMiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwidGFnIiwiZmluaXNoZWQiLCJjYWxsRnVuYyIsIm5vZGUiLCJkZXN0cm95IiwiYWN0aW9uIiwic2VxdWVuY2UiLCJmYWRlT3V0IiwicnVuQWN0aW9uIiwidGlwIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiZ2FtZSIsInNldE51bSIsInVwZGF0ZSIsImR0IiwieCIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQjtBQUNBLFNBQUtDLElBQUwsR0FBWSxDQUNSLFFBQVEsV0FBUixHQUFzQlAsTUFBTSxDQUFDUSxLQURyQixFQUVSLFFBQVEsV0FBUixHQUFzQlIsTUFBTSxDQUFDUSxLQUZyQixDQUFaO0FBS0gsR0FmSTtBQWlCTEMsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUdELEtBQUssQ0FBQ0UsR0FBTixJQUFhLENBQWhCLEVBQW1CO0FBQ2YsVUFBSUMsUUFBUSxHQUFHWCxFQUFFLENBQUNZLFFBQUgsQ0FBWSxZQUFXO0FBQ2xDLGFBQUtDLElBQUwsQ0FBVUMsT0FBVjtBQUNILE9BRmMsRUFFWixJQUZZLENBQWY7QUFHQSxVQUFJQyxNQUFNLEdBQUdmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FBWWhCLEVBQUUsQ0FBQ2lCLE9BQUgsQ0FBVyxHQUFYLENBQVosRUFBNkJOLFFBQTdCLENBQWI7QUFDQSxXQUFLRSxJQUFMLENBQVVLLFNBQVYsQ0FBb0JILE1BQXBCO0FBRUEsVUFBSUksR0FBRyxHQUFHLEtBQUtkLElBQUwsQ0FBVWUsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixLQUFLakIsSUFBTCxDQUFVa0IsTUFBckMsQ0FBVixDQUFWLENBUGUsQ0FRZjs7QUFFQXpCLE1BQUFBLE1BQU0sQ0FBQzBCLElBQVAsQ0FBWUMsTUFBWixDQUFtQixDQUFuQjtBQUNIO0FBQ0osR0E5Qkk7QUFnQ0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFDbEIsUUFBRyxLQUFLZCxJQUFMLENBQVVlLENBQVYsR0FBYyxLQUFLZixJQUFMLENBQVVnQixNQUFWLENBQWlCRCxDQUEvQixHQUFtQyxDQUFDLEdBQXZDLEVBQTRDO0FBQ3hDLFdBQUtmLElBQUwsQ0FBVUMsT0FBVjtBQUNIO0FBQ0o7QUFyQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHJlcXVpcmUoXCJnbG9iYWxcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUueSA9IDEwMCArIHRoaXMubm9kZS5zZWVkICogNTA7XG4gICAgICAgIHRoaXMudGlwcyA9IFtcbiAgICAgICAgICAgIFwi5Y+Y5bCPflwiICsgXCJcXG7mr4/mrKHliIbmlbDpop3lpJYrXCIgKyBnbG9iYWwuYm9udXMsXG4gICAgICAgICAgICBcIjLliIZ+XCIgKyBcIlxcbuavj+asoeWIhuaVsOmineWklitcIiArIGdsb2JhbC5ib251cyxcbiAgICAgICAgICAgIFxuICAgICAgICBdO1xuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYob3RoZXIudGFnID09IDApIHtcbiAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5mYWRlT3V0KDAuNCksIGZpbmlzaGVkKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcblxuICAgICAgICAgICAgdmFyIHRpcCA9IHRoaXMudGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRpcHMubGVuZ3RoKV07XG4gICAgICAgICAgICAvLyBnbG9iYWwuZ2FtZS5zZXRUaXAodGlwKTtcblxuICAgICAgICAgICAgZ2xvYmFsLmdhbWUuc2V0TnVtKDIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5ub2RlLnggKyB0aGlzLm5vZGUucGFyZW50LnggPCAtNDAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19