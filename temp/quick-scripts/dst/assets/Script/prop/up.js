
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/prop/up.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa3112Hl29OgZ0YO1XYfUeB', 'up');
// Script/prop/up.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    // this.node.y = 100 - this.node.seed * 100;
    this.xv = -1;
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 0) {
      var finished = cc.callFunc(function () {
        this.node.destroy();
      }, this);
      var action = cc.sequence(cc.fadeOut(0.4), finished);
      this.node.runAction(action);
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    if (this.node.x + this.node.parent.x < -400) {
      this.node.destroy();
    } else {
      this.node.x += this.xv;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvcHJvcC91cC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ4diIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ0YWciLCJmaW5pc2hlZCIsImNhbGxGdW5jIiwibm9kZSIsImRlc3Ryb3kiLCJhY3Rpb24iLCJzZXF1ZW5jZSIsImZhZGVPdXQiLCJydW5BY3Rpb24iLCJ1cGRhdGUiLCJkdCIsIngiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQSxTQUFLQyxFQUFMLEdBQVUsQ0FBQyxDQUFYO0FBQ0gsR0FYSTtBQWFMQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBR0QsS0FBSyxDQUFDRSxHQUFOLElBQWEsQ0FBaEIsRUFBbUI7QUFDZixVQUFJQyxRQUFRLEdBQUdWLEVBQUUsQ0FBQ1csUUFBSCxDQUFZLFlBQVc7QUFDbEMsYUFBS0MsSUFBTCxDQUFVQyxPQUFWO0FBQ0gsT0FGYyxFQUVaLElBRlksQ0FBZjtBQUdBLFVBQUlDLE1BQU0sR0FBR2QsRUFBRSxDQUFDZSxRQUFILENBQVlmLEVBQUUsQ0FBQ2dCLE9BQUgsQ0FBVyxHQUFYLENBQVosRUFBNkJOLFFBQTdCLENBQWI7QUFDQSxXQUFLRSxJQUFMLENBQVVLLFNBQVYsQ0FBb0JILE1BQXBCO0FBRUg7QUFDSixHQXRCSTtBQXdCTDtBQUNBSSxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQixRQUFHLEtBQUtQLElBQUwsQ0FBVVEsQ0FBVixHQUFjLEtBQUtSLElBQUwsQ0FBVVMsTUFBVixDQUFpQkQsQ0FBL0IsR0FBbUMsQ0FBQyxHQUF2QyxFQUE0QztBQUN4QyxXQUFLUixJQUFMLENBQVVDLE9BQVY7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLRCxJQUFMLENBQVVRLENBQVYsSUFBZSxLQUFLZixFQUFwQjtBQUNIO0FBQ0o7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHJlcXVpcmUoXCJnbG9iYWxcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyB0aGlzLm5vZGUueSA9IDEwMCAtIHRoaXMubm9kZS5zZWVkICogMTAwO1xuICAgICAgICB0aGlzLnh2ID0gLTE7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICBpZihvdGhlci50YWcgPT0gMCkge1xuICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLmZhZGVPdXQoMC40KSwgZmluaXNoZWQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZih0aGlzLm5vZGUueCArIHRoaXMubm9kZS5wYXJlbnQueCA8IC00MDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnh2O1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19