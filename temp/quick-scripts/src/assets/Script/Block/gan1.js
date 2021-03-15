"use strict";
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