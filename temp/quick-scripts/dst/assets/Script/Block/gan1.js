
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Block/gan1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e01b212kFI1JHhQAFZc8MY', 'gan1');
// Script/Block/gan1.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {
    gan2: {
      "default": null,
      type: cc.Node
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 0) {
      this.gan2.active = true;
      this.node.active = false;
      global.game.setNum(1);
    }
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmxvY2svZ2FuMS5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJnYW4yIiwidHlwZSIsIk5vZGUiLCJvbkxvYWQiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwidGFnIiwiYWN0aXZlIiwibm9kZSIsImdhbWUiLCJzZXROdW0iLCJ1cGRhdGUiLCJkdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGUDtBQURFLEdBSFA7QUFVTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFbkIsQ0FiSTtBQWVMQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBR0QsS0FBSyxDQUFDRSxHQUFOLElBQWEsQ0FBaEIsRUFBbUI7QUFDZixXQUFLUCxJQUFMLENBQVVRLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxXQUFLQyxJQUFMLENBQVVELE1BQVYsR0FBbUIsS0FBbkI7QUFFQWQsTUFBQUEsTUFBTSxDQUFDZ0IsSUFBUCxDQUFZQyxNQUFaLENBQW1CLENBQW5CO0FBQ0g7QUFFSixHQXZCSTtBQXlCTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYyxDQUVyQjtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gcmVxdWlyZShcImdsb2JhbFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGdhbjI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgaWYob3RoZXIudGFnID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FuMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBnbG9iYWwuZ2FtZS5zZXROdW0oMSk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbiAgICB9LFxufSk7XG4iXX0=