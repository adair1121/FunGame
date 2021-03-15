"use strict";
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