
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Scene/stamp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84a90M4h1tC2pdbyJ9SB2SO', 'stamp');
// Script/Scene/stamp.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {
    yin: {
      "default": null,
      type: cc.Node
    },
    map: {
      "default": null,
      type: cc.Node
    },
    block: {
      "default": [],
      type: cc.Prefab
    },
    prop: {
      "default": [],
      type: cc.Prefab
    },
    num: {
      "default": null,
      type: cc.Label
    }
  },
  // use this for initialization
  onLoad: function onLoad() {
    global.game = this;
    global.num = 0;
    global.bonus = 0;
    var manager = cc.director.getCollisionManager();
    manager.enabled = true; // manager.enabledDebugDraw = true;
    // manager.enabledDrawBoundingBox = true;

    this.schedule(function (argument) {
      this.setBLock(); // this.setProp();
    }, 1, this);
    this.yin.ori_v = 1;
    this.yin.ori_a = 0.2;
    this.yin.v = this.yin.ori_v;
    this.yin.a = this.yin.ori_a;
    this.yin.zIndex = 9;
    this.node.on('touchstart', function (event) {
      if (!global.gameover) {
        this.yin.v = this.yin.ori_v;
        this.yin.a = this.yin.ori_a;
        this.yin_move = true;
      }

      var action = cc.sequence(cc.moveTo(0.1, 0, 100), cc.moveTo(0.1, 0, -200));
      this.yin.runAction(action); // console.log(event.getLocation())
      // this.yin.setPosition(event.getLocation())
    }, this);
    this.node.on('touchend', function (event) {
      this.yin_move = false;
    }, this);
  },
  setBLock: function setBLock() {
    var rand = Math.floor(Math.seededRandom() * this.block.length);
    var block = cc.instantiate(this.block[rand]); // console.log(Math.max(0, (100 - global.num) / 100) );

    block.setPosition(500, 100); // block.scaleX = Math.min(1, Math.max(0, (200 - global.num) / 200)) + Math.seededRandom() * 0.2 + 0.2;
    // block.scaleY = block.scaleX;

    block.parent = this.map;
    var action = cc.moveTo(4, -500, 100);
    block.runAction(action);
  },
  setProp: function setProp() {
    var rand = Math.floor(Math.seededRandom() * this.prop.length);
    var prop = cc.instantiate(this.prop[rand]);
    prop.setPosition(500, 0);
    prop.seed = Math.seededRandom();
    prop.parent = this.map;
    var action = cc.moveTo(4, -500, 0);
    prop.runAction(action);
  },
  setNum: function setNum(num) {
    global.num += num + global.bonus;
    this.num.string = global.num;
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {
    /*if(this.yin_move) {
        this.yin.y += this.yin.v;
        this.yin.v += this.yin.a;
    }*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvU2NlbmUvc3RhbXAuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwieWluIiwidHlwZSIsIk5vZGUiLCJtYXAiLCJibG9jayIsIlByZWZhYiIsInByb3AiLCJudW0iLCJMYWJlbCIsIm9uTG9hZCIsImdhbWUiLCJib251cyIsIm1hbmFnZXIiLCJkaXJlY3RvciIsImdldENvbGxpc2lvbk1hbmFnZXIiLCJlbmFibGVkIiwic2NoZWR1bGUiLCJhcmd1bWVudCIsInNldEJMb2NrIiwib3JpX3YiLCJvcmlfYSIsInYiLCJhIiwiekluZGV4Iiwibm9kZSIsIm9uIiwiZXZlbnQiLCJnYW1lb3ZlciIsInlpbl9tb3ZlIiwiYWN0aW9uIiwic2VxdWVuY2UiLCJtb3ZlVG8iLCJydW5BY3Rpb24iLCJyYW5kIiwiTWF0aCIsImZsb29yIiwic2VlZGVkUmFuZG9tIiwibGVuZ3RoIiwiaW5zdGFudGlhdGUiLCJzZXRQb3NpdGlvbiIsInBhcmVudCIsInNldFByb3AiLCJzZWVkIiwic2V0TnVtIiwic3RyaW5nIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRlIsS0FERztBQUtSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZSLEtBTEc7QUFTUkUsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsRUFETjtBQUVI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YmFsID0gcmVxdWlyZShcImdsb2JhbFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHlpbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICBibG9jazoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcDoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgbnVtOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBnbG9iYWwuZ2FtZSA9IHRoaXM7XG4gICAgICAgIGdsb2JhbC5udW0gPSAwO1xuICAgICAgICBnbG9iYWwuYm9udXMgPSAwO1xuXG4gICAgICAgIHZhciBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBtYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldEJMb2NrKCk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldFByb3AoKTtcbiAgICAgICAgfSwgMSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy55aW4ub3JpX3YgPSAxO1xuICAgICAgICB0aGlzLnlpbi5vcmlfYSA9IDAuMjtcbiAgICAgICAgdGhpcy55aW4udiA9IHRoaXMueWluLm9yaV92O1xuICAgICAgICB0aGlzLnlpbi5hID0gdGhpcy55aW4ub3JpX2E7XG4gICAgICAgIHRoaXMueWluLnpJbmRleCA9IDk7XG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cbiAgICAgICAgICAgIGlmKCFnbG9iYWwuZ2FtZW92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnlpbi52ID0gdGhpcy55aW4ub3JpX3Y7XG4gICAgICAgICAgICAgICAgdGhpcy55aW4uYSA9IHRoaXMueWluLm9yaV9hO1xuICAgICAgICAgICAgICAgIHRoaXMueWluX21vdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuMSwgMCwgMTAwKSxcbiAgICAgICAgICAgICAgICBjYy5tb3ZlVG8oMC4xLCAwLCAtMjAwKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnlpbi5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LmdldExvY2F0aW9uKCkpXG4gICAgICAgICAgICAvLyB0aGlzLnlpbi5zZXRQb3NpdGlvbihldmVudC5nZXRMb2NhdGlvbigpKVxuICAgICAgICB9LCB0aGlzKTtcblxuXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuICAgICAgICAgICAgdGhpcy55aW5fbW92ZSA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgIH0sXG5cbiAgICBzZXRCTG9jazogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnNlZWRlZFJhbmRvbSgpICogdGhpcy5ibG9jay5sZW5ndGgpO1xuICAgICAgICB2YXIgYmxvY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJsb2NrW3JhbmRdKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhNYXRoLm1heCgwLCAoMTAwIC0gZ2xvYmFsLm51bSkgLyAxMDApICk7XG4gICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKDUwMCwgMTAwKTtcbiAgICAgICAgLy8gYmxvY2suc2NhbGVYID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKDIwMCAtIGdsb2JhbC5udW0pIC8gMjAwKSkgKyBNYXRoLnNlZWRlZFJhbmRvbSgpICogMC4yICsgMC4yO1xuICAgICAgICAvLyBibG9jay5zY2FsZVkgPSBibG9jay5zY2FsZVg7XG5cbiAgICAgICAgYmxvY2sucGFyZW50ID0gdGhpcy5tYXA7XG5cbiAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVUbyg0LCAtNTAwLCAxMDApO1xuICAgICAgICBibG9jay5ydW5BY3Rpb24oYWN0aW9uKTtcbiAgICB9LFxuXG4gICAgc2V0UHJvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnNlZWRlZFJhbmRvbSgpICogdGhpcy5wcm9wLmxlbmd0aCk7XG4gICAgICAgIHZhciBwcm9wID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcm9wW3JhbmRdKTtcblxuICAgICAgICBwcm9wLnNldFBvc2l0aW9uKDUwMCwgMCk7XG4gICAgICAgIHByb3Auc2VlZCA9IE1hdGguc2VlZGVkUmFuZG9tKCk7XG5cbiAgICAgICAgcHJvcC5wYXJlbnQgPSB0aGlzLm1hcDtcblxuICAgICAgICB2YXIgYWN0aW9uID0gY2MubW92ZVRvKDQsIC01MDAsIDApO1xuICAgICAgICBwcm9wLnJ1bkFjdGlvbihhY3Rpb24pO1xuICAgIH0sXG5cbiAgICBzZXROdW06IGZ1bmN0aW9uKG51bSkge1xuICAgICAgICBnbG9iYWwubnVtICs9IG51bSArIGdsb2JhbC5ib251cztcbiAgICAgICAgdGhpcy5udW0uc3RyaW5nID0gZ2xvYmFsLm51bTtcbiAgICB9LFxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgICAgIC8qaWYodGhpcy55aW5fbW92ZSkge1xuICAgICAgICAgICAgdGhpcy55aW4ueSArPSB0aGlzLnlpbi52O1xuICAgICAgICAgICAgdGhpcy55aW4udiArPSB0aGlzLnlpbi5hO1xuICAgICAgICB9Ki9cbiAgICB9LFxufSk7XG4iXX0=