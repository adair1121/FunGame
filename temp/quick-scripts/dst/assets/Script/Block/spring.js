
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Block/spring.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75c84si/AJN+4mufN1yAf4n', 'spring');
// Script/Block/spring.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.node.getChildByName("spring1").active = false;
    this.node.getChildByName("spring2").active = true;
    this.scheduleOnce(function (argument) {
      this.node.getChildByName("spring2").active = false;
      this.node.getChildByName("spring1").active = true;
    }, 1);

    if (other.tag == 0 && !this.touch) {
      this.touch = true;
      global.game.setNum(1);
      var tip = this.tips[Math.floor(Math.random() * this.tips.length)]; // global.game.setTip(tip);
    }

    this.count++;

    if (this.count > 5) {
      this.node.destroy();
    }
  },
  // onLoad () {},
  start: function start() {
    this.count = 0;
    this.touch = false;
    this.tips = ["好高", "是不是只有这种时候，你才会注意到我？", "我不会和你讲勇者的故事", "也许你该担心一下落脚的位置", "飞呀飞呀我的……", "不好意思，我想唱歌", "你是否想和其他人不一样", "你是否和其他人不一样", "你是否和其他人一样", "你该不会是为了看这些字而来的吧？", "下次再和你讲一个完整的故事", "哇哦", "再见~", "你居然有心思注意这些无聊的字？", "你要听我说鸡汤吗？", "我不会讲那些大道理", "有些事想告诉你", "勇者为了打败魔王踏上旅途", "勇者遇到了强力的弓箭手伙伴", "勇者遇到了强力的魔法师伙伴", "勇者遇到了可爱的牧师伙伴", "勇者打败了魔王", "勇者身上沾满了魔王的气息……"];
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmxvY2svc3ByaW5nLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvdGhlciIsInNlbGYiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJzY2hlZHVsZU9uY2UiLCJhcmd1bWVudCIsInRhZyIsInRvdWNoIiwiZ2FtZSIsInNldE51bSIsInRpcCIsInRpcHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjb3VudCIsImRlc3Ryb3kiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwieCIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MO0FBRUFDLEVBQUFBLGdCQUFnQixFQUFFLDBCQUFVQyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QjtBQUNyQyxTQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsU0FBekIsRUFBb0NDLE1BQXBDLEdBQTZDLEtBQTdDO0FBQ0EsU0FBS0YsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFNBQXpCLEVBQW9DQyxNQUFwQyxHQUE2QyxJQUE3QztBQUVBLFNBQUtDLFlBQUwsQ0FBa0IsVUFBU0MsUUFBVCxFQUFtQjtBQUNqQyxXQUFLSixJQUFMLENBQVVDLGNBQVYsQ0FBeUIsU0FBekIsRUFBb0NDLE1BQXBDLEdBQTZDLEtBQTdDO0FBQ0EsV0FBS0YsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFNBQXpCLEVBQW9DQyxNQUFwQyxHQUE2QyxJQUE3QztBQUNILEtBSEQsRUFHRyxDQUhIOztBQUtBLFFBQUdKLEtBQUssQ0FBQ08sR0FBTixJQUFhLENBQWIsSUFBa0IsQ0FBQyxLQUFLQyxLQUEzQixFQUFrQztBQUM5QixXQUFLQSxLQUFMLEdBQWEsSUFBYjtBQUNBZixNQUFBQSxNQUFNLENBQUNnQixJQUFQLENBQVlDLE1BQVosQ0FBbUIsQ0FBbkI7QUFFQSxVQUFJQyxHQUFHLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEtBQUtILElBQUwsQ0FBVUksTUFBckMsQ0FBVixDQUFWLENBSjhCLENBSzlCO0FBQ0g7O0FBRUQsU0FBS0MsS0FBTDs7QUFDQSxRQUFHLEtBQUtBLEtBQUwsR0FBYSxDQUFoQixFQUFtQjtBQUNmLFdBQUtmLElBQUwsQ0FBVWdCLE9BQVY7QUFDSDtBQUVKLEdBOUJJO0FBK0JMO0FBRUFDLEVBQUFBLEtBakNLLG1CQWlDSTtBQUNMLFNBQUtGLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS1QsS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLSSxJQUFMLEdBQVksQ0FDUixJQURRLEVBRVIsb0JBRlEsRUFHUixhQUhRLEVBSVIsZUFKUSxFQUtSLFVBTFEsRUFNUixXQU5RLEVBT1IsYUFQUSxFQVFSLFlBUlEsRUFTUixXQVRRLEVBVVIsa0JBVlEsRUFXUixlQVhRLEVBWVIsSUFaUSxFQWFSLEtBYlEsRUFjUixpQkFkUSxFQWVSLFdBZlEsRUFnQlIsV0FoQlEsRUFpQlIsU0FqQlEsRUFrQlIsY0FsQlEsRUFtQlIsZUFuQlEsRUFvQlIsZUFwQlEsRUFxQlIsY0FyQlEsRUFzQlIsU0F0QlEsRUF1QlIsZ0JBdkJRLENBQVo7QUF5QkgsR0E3REk7QUErRExRLEVBQUFBLE1BL0RLLGtCQStER0MsRUEvREgsRUErRE87QUFFUixRQUFHLEtBQUtuQixJQUFMLENBQVVvQixDQUFWLEdBQWMsS0FBS3BCLElBQUwsQ0FBVXFCLE1BQVYsQ0FBaUJELENBQS9CLEdBQW1DLENBQUMsR0FBdkMsRUFBNEM7QUFDeEMsV0FBS3BCLElBQUwsQ0FBVWdCLE9BQVY7QUFDSDtBQUVKO0FBckVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHA6Ly93d3cuY29jb3MuY29tL2RvY3MvY3JlYXRvci9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2VkaXRvcnNfYW5kX3Rvb2xzL2NyZWF0b3ItY2hhcHRlcnMvc2NyaXB0aW5nL2NsYXNzL2luZGV4Lmh0bWxcbnZhciBnbG9iYWwgPSByZXF1aXJlKFwiZ2xvYmFsXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIsIHNlbGYpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3ByaW5nMVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3ByaW5nMlwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKGFyZ3VtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJpbmcyXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3ByaW5nMVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9LCAxKTtcblxuICAgICAgICBpZihvdGhlci50YWcgPT0gMCAmJiAhdGhpcy50b3VjaCkge1xuICAgICAgICAgICAgdGhpcy50b3VjaCA9IHRydWU7XG4gICAgICAgICAgICBnbG9iYWwuZ2FtZS5zZXROdW0oMSk7XG5cbiAgICAgICAgICAgIHZhciB0aXAgPSB0aGlzLnRpcHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50aXBzLmxlbmd0aCldO1xuICAgICAgICAgICAgLy8gZ2xvYmFsLmdhbWUuc2V0VGlwKHRpcCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvdW50Kys7XG4gICAgICAgIGlmKHRoaXMuY291bnQgPiA1KSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLmNvdW50ID0gMDtcbiAgICAgICAgdGhpcy50b3VjaCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpcHMgPSBbXG4gICAgICAgICAgICBcIuWlvemrmFwiLFxuICAgICAgICAgICAgXCLmmK/kuI3mmK/lj6rmnInov5nnp43ml7blgJnvvIzkvaDmiY3kvJrms6jmhI/liLDmiJHvvJ9cIixcbiAgICAgICAgICAgIFwi5oiR5LiN5Lya5ZKM5L2g6K6y5YuH6ICF55qE5pWF5LqLXCIsXG4gICAgICAgICAgICBcIuS5n+iuuOS9oOivpeaLheW/g+S4gOS4i+iQveiEmueahOS9jee9rlwiLFxuICAgICAgICAgICAgXCLpo57lkYDpo57lkYDmiJHnmoTigKbigKZcIixcbiAgICAgICAgICAgIFwi5LiN5aW95oSP5oCd77yM5oiR5oOz5ZSx5q2MXCIsXG4gICAgICAgICAgICBcIuS9oOaYr+WQpuaDs+WSjOWFtuS7luS6uuS4jeS4gOagt1wiLFxuICAgICAgICAgICAgXCLkvaDmmK/lkKblkozlhbbku5bkurrkuI3kuIDmoLdcIixcbiAgICAgICAgICAgIFwi5L2g5piv5ZCm5ZKM5YW25LuW5Lq65LiA5qC3XCIsXG4gICAgICAgICAgICBcIuS9oOivpeS4jeS8muaYr+S4uuS6hueci+i/meS6m+Wtl+iAjOadpeeahOWQp++8n1wiLFxuICAgICAgICAgICAgXCLkuIvmrKHlho3lkozkvaDorrLkuIDkuKrlrozmlbTnmoTmlYXkuotcIixcbiAgICAgICAgICAgIFwi5ZOH5ZOmXCIsXG4gICAgICAgICAgICBcIuWGjeingX5cIixcbiAgICAgICAgICAgIFwi5L2g5bGF54S25pyJ5b+D5oCd5rOo5oSP6L+Z5Lqb5peg6IGK55qE5a2X77yfXCIsXG4gICAgICAgICAgICBcIuS9oOimgeWQrOaIkeivtOm4oeaxpOWQl++8n1wiLFxuICAgICAgICAgICAgXCLmiJHkuI3kvJrorrLpgqPkupvlpKfpgZPnkIZcIixcbiAgICAgICAgICAgIFwi5pyJ5Lqb5LqL5oOz5ZGK6K+J5L2gXCIsXG4gICAgICAgICAgICBcIuWLh+iAheS4uuS6huaJk+i0pemtlOeOi+i4j+S4iuaXhemAlFwiLFxuICAgICAgICAgICAgXCLli4fogIXpgYfliLDkuoblvLrlipvnmoTlvJPnrq3miYvkvJnkvLRcIixcbiAgICAgICAgICAgIFwi5YuH6ICF6YGH5Yiw5LqG5by65Yqb55qE6a2U5rOV5biI5LyZ5Ly0XCIsXG4gICAgICAgICAgICBcIuWLh+iAhemBh+WIsOS6huWPr+eIseeahOeJp+W4iOS8meS8tFwiLFxuICAgICAgICAgICAgXCLli4fogIXmiZPotKXkuobprZTnjotcIixcbiAgICAgICAgICAgIFwi5YuH6ICF6Lqr5LiK5rK+5ruh5LqG6a2U546L55qE5rCU5oGv4oCm4oCmXCJcbiAgICAgICAgXTtcbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuXG4gICAgICAgIGlmKHRoaXMubm9kZS54ICsgdGhpcy5ub2RlLnBhcmVudC54IDwgLTQwMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgfSxcbn0pO1xuIl19