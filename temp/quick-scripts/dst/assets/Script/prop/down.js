
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/prop/down.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff2f90QyQVKWaY/nYV5tGAc', 'down');
// Script/prop/down.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {// this.node.y = 100 + this.node.seed * 50;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvcHJvcC9kb3duLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJ0YWciLCJmaW5pc2hlZCIsImNhbGxGdW5jIiwibm9kZSIsImRlc3Ryb3kiLCJhY3Rpb24iLCJzZXF1ZW5jZSIsImZhZGVPdXQiLCJydW5BY3Rpb24iLCJ1cGRhdGUiLCJkdCIsIngiLCJwYXJlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FDaEI7QUFDSCxHQVZJO0FBWUxDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxRQUFHRCxLQUFLLENBQUNFLEdBQU4sSUFBYSxDQUFoQixFQUFtQjtBQUNmLFVBQUlDLFFBQVEsR0FBR1QsRUFBRSxDQUFDVSxRQUFILENBQVksWUFBVztBQUNsQyxhQUFLQyxJQUFMLENBQVVDLE9BQVY7QUFDSCxPQUZjLEVBRVosSUFGWSxDQUFmO0FBR0EsVUFBSUMsTUFBTSxHQUFHYixFQUFFLENBQUNjLFFBQUgsQ0FBWWQsRUFBRSxDQUFDZSxPQUFILENBQVcsR0FBWCxDQUFaLEVBQTZCTixRQUE3QixDQUFiO0FBQ0EsV0FBS0UsSUFBTCxDQUFVSyxTQUFWLENBQW9CSCxNQUFwQjtBQUNIO0FBQ0osR0FwQkk7QUFzQkw7QUFDQUksRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFDbEIsUUFBRyxLQUFLUCxJQUFMLENBQVVRLENBQVYsR0FBYyxLQUFLUixJQUFMLENBQVVTLE1BQVYsQ0FBaUJELENBQS9CLEdBQW1DLENBQUMsR0FBdkMsRUFBNEM7QUFDeEMsV0FBS1IsSUFBTCxDQUFVQyxPQUFWO0FBQ0g7QUFDSjtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gcmVxdWlyZShcImdsb2JhbFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS55ID0gMTAwICsgdGhpcy5ub2RlLnNlZWQgKiA1MDtcbiAgICB9LFxuXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAwKSB7XG4gICAgICAgICAgICB2YXIgZmluaXNoZWQgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MuZmFkZU91dCgwLjQpLCBmaW5pc2hlZCk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuICAgICAgICBpZih0aGlzLm5vZGUueCArIHRoaXMubm9kZS5wYXJlbnQueCA8IC00MDApIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=