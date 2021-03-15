"use strict";
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