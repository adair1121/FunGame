
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/prop/prop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b945zU07pLYYq9d7s8owfO', 'prop');
// Script/prop/prop.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    // this.node.y = 200 - this.node.seed * 100;
    this.xv = this.node.xv || -1 * this.node.seed - 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvcHJvcC9wcm9wLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInh2Iiwibm9kZSIsInNlZWQiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwidGFnIiwiZmluaXNoZWQiLCJjYWxsRnVuYyIsImRlc3Ryb3kiLCJhY3Rpb24iLCJzZXF1ZW5jZSIsImZhZGVPdXQiLCJydW5BY3Rpb24iLCJ1cGRhdGUiLCJkdCIsIngiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQSxTQUFLQyxFQUFMLEdBQVUsS0FBS0MsSUFBTCxDQUFVRCxFQUFWLElBQWdCLENBQUMsQ0FBRCxHQUFLLEtBQUtDLElBQUwsQ0FBVUMsSUFBZixHQUFzQixDQUFoRDtBQUNILEdBWEk7QUFhTEMsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFFBQUdELEtBQUssQ0FBQ0UsR0FBTixJQUFhLENBQWhCLEVBQW1CO0FBQ2YsVUFBSUMsUUFBUSxHQUFHWixFQUFFLENBQUNhLFFBQUgsQ0FBWSxZQUFXO0FBQ2xDLGFBQUtQLElBQUwsQ0FBVVEsT0FBVjtBQUNILE9BRmMsRUFFWixJQUZZLENBQWY7QUFHQSxVQUFJQyxNQUFNLEdBQUdmLEVBQUUsQ0FBQ2dCLFFBQUgsQ0FBWWhCLEVBQUUsQ0FBQ2lCLE9BQUgsQ0FBVyxHQUFYLENBQVosRUFBNkJMLFFBQTdCLENBQWI7QUFDQSxXQUFLTixJQUFMLENBQVVZLFNBQVYsQ0FBb0JILE1BQXBCO0FBRUg7QUFDSixHQXRCSTtBQXdCTDtBQUNBSSxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQixRQUFHLEtBQUtkLElBQUwsQ0FBVWUsQ0FBVixHQUFjLEtBQUtmLElBQUwsQ0FBVWdCLE1BQVYsQ0FBaUJELENBQS9CLEdBQW1DLENBQUMsR0FBdkMsRUFBNEM7QUFDeEMsV0FBS2YsSUFBTCxDQUFVUSxPQUFWO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBS1IsSUFBTCxDQUFVZSxDQUFWLElBQWUsS0FBS2hCLEVBQXBCO0FBQ0g7QUFDSjtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gcmVxdWlyZShcImdsb2JhbFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS55ID0gMjAwIC0gdGhpcy5ub2RlLnNlZWQgKiAxMDA7XG4gICAgICAgIHRoaXMueHYgPSB0aGlzLm5vZGUueHYgfHwgLTEgKiB0aGlzLm5vZGUuc2VlZCAtIDE7XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICBpZihvdGhlci50YWcgPT0gMCkge1xuICAgICAgICAgICAgdmFyIGZpbmlzaGVkID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLmZhZGVPdXQoMC40KSwgZmluaXNoZWQpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xuXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZih0aGlzLm5vZGUueCArIHRoaXMubm9kZS5wYXJlbnQueCA8IC00MDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnh2O1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19