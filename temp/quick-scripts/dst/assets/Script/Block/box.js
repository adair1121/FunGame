
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Block/box.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb35dzO7Z1GIYEDgot3KXT8', 'box');
// Script/Block/box.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    this.touch = false;
    this.count = 0;
    this.tips = ["你在这里停留的有点久了~", "虽然不知道前方有什么在等着你~", "轻轻按住屏幕就好~", "人生就是在不清楚前方是否有路的时候依然要勇敢的踏出~", "该出发了~", "从前，有个勇者……", "你想听我讲故事吗？", "当时年少的你，有着超龄的成熟", "你藏身与伞下，连句再见也没说"];

    if (this.node.mode == "c1") {
      this.tips = ["小卜和花生是好朋友~", "他们总是很快乐的在一起玩耍", "但是花生心里很自卑", "终于有一天，它问小卜", "『小卜，你为什么愿意和我一起玩呢？』", "小卜回答，『因为我们是朋友啊』", "『可是我是花生……』花生似乎想要说什么", "小卜说『你是花生，同时也是我的好朋友啊』", "『不，我隐瞒了你……』", "花生鼓足了勇气", "『花生不是长我这样的……我是个……』", "『我是个正方形的花生!』", "花生憋红了脸……『真正的花生是椭圆形的……』", "因为是朋友，花生不想欺骗小卜", "但也因为是朋友，花生很害怕小卜离开", "花生没有其他朋友，因为他", "因为他是正方形的……花生", "没有一个正常的花生愿意和正方形的花生做朋友", "……", "花生偷偷的瞄了一眼小卜", "『可是你是花生啊』小卜说", "『你就是你，你是我的朋友，花生啊』小卜说", "花生呆住了", "这是第一次有人对他说这样的话", "花生开始抽泣", "谢谢，非常感谢…………谢谢你，小卜…………", "花生一边哭，一边道谢", "小卜不明白花生为什么哭", "一直也不明白", "……", "『小卜与花生』1 end~", "『小卜与花生』1 end~", "『小卜与花生』1 end~", "『小卜与花生』1 end~", "『小卜与花生』1 end~", "点击左下角按钮可以退出练习模式"];
    }
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    this.count++;
    this.node.getChildByName("box1").active = false;
    this.node.getChildByName("box2").active = true;

    if (this.count > 7 && this.node.mode != "c1") {
      var tip = this.tips[Math.floor(Math.random() * this.tips.length)];
      global.game.setTip(tip);
    }

    if (other.tag == 0 && !this.touch) {
      this.touch = true;

      if (this.node.mode == "c1") {
        var tip = this.tips[global.word];

        if (tip) {
          global.game.setTip(tip);
          global.word++;
        }
      } else {
        global.game.setNum(1);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmxvY2svYm94LmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInRvdWNoIiwiY291bnQiLCJ0aXBzIiwibm9kZSIsIm1vZGUiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJzZWxmIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJ0aXAiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJnYW1lIiwic2V0VGlwIiwidGFnIiwid29yZCIsInNldE51bSIsInVwZGF0ZSIsImR0IiwieCIsInBhcmVudCIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsTUFBTSxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUNBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsU0FBS0MsS0FBTCxHQUFhLEtBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUVBLFNBQUtDLElBQUwsR0FBWSxDQUNSLGNBRFEsRUFFUixpQkFGUSxFQUdSLFdBSFEsRUFJUiw0QkFKUSxFQUtSLE9BTFEsRUFNUixXQU5RLEVBT1IsV0FQUSxFQVFSLGdCQVJRLEVBU1IsZ0JBVFEsQ0FBWjs7QUFZQSxRQUFHLEtBQUtDLElBQUwsQ0FBVUMsSUFBVixJQUFrQixJQUFyQixFQUEyQjtBQUN2QixXQUFLRixJQUFMLEdBQVksQ0FDUixZQURRLEVBRVIsZUFGUSxFQUdSLFdBSFEsRUFJUixZQUpRLEVBS1Isb0JBTFEsRUFNUixpQkFOUSxFQU9SLHFCQVBRLEVBUVIsc0JBUlEsRUFTUixhQVRRLEVBVVIsU0FWUSxFQVdSLG9CQVhRLEVBWVIsY0FaUSxFQWFSLHdCQWJRLEVBY1IsZ0JBZFEsRUFlUixtQkFmUSxFQWdCUixjQWhCUSxFQWlCUixjQWpCUSxFQWtCUix1QkFsQlEsRUFtQlIsSUFuQlEsRUFvQlIsYUFwQlEsRUFxQlIsY0FyQlEsRUFzQlIsc0JBdEJRLEVBdUJSLE9BdkJRLEVBd0JSLGdCQXhCUSxFQXlCUixRQXpCUSxFQTBCUix1QkExQlEsRUEyQlIsWUEzQlEsRUE0QlIsYUE1QlEsRUE2QlIsUUE3QlEsRUE4QlIsSUE5QlEsRUErQlIsZUEvQlEsRUFnQ1IsZUFoQ1EsRUFpQ1IsZUFqQ1EsRUFrQ1IsZUFsQ1EsRUFtQ1IsZUFuQ1EsRUFvQ1IsaUJBcENRLENBQVo7QUFzQ0g7QUFDSixHQWhFSTtBQWtFTEcsRUFBQUEsZ0JBQWdCLEVBQUUsMEJBQVVDLEtBQVYsRUFBaUJDLElBQWpCLEVBQXVCO0FBQ3JDLFNBQUtOLEtBQUw7QUFFQSxTQUFLRSxJQUFMLENBQVVLLGNBQVYsQ0FBeUIsTUFBekIsRUFBaUNDLE1BQWpDLEdBQTBDLEtBQTFDO0FBQ0EsU0FBS04sSUFBTCxDQUFVSyxjQUFWLENBQXlCLE1BQXpCLEVBQWlDQyxNQUFqQyxHQUEwQyxJQUExQzs7QUFFQSxRQUFHLEtBQUtSLEtBQUwsR0FBYSxDQUFiLElBQWtCLEtBQUtFLElBQUwsQ0FBVUMsSUFBVixJQUFrQixJQUF2QyxFQUE2QztBQUN6QyxVQUFJTSxHQUFHLEdBQUcsS0FBS1IsSUFBTCxDQUFVUyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEtBQUtYLElBQUwsQ0FBVVksTUFBckMsQ0FBVixDQUFWO0FBQ0FyQixNQUFBQSxNQUFNLENBQUNzQixJQUFQLENBQVlDLE1BQVosQ0FBbUJOLEdBQW5CO0FBQ0g7O0FBRUQsUUFBR0osS0FBSyxDQUFDVyxHQUFOLElBQWEsQ0FBYixJQUFrQixDQUFDLEtBQUtqQixLQUEzQixFQUFrQztBQUM5QixXQUFLQSxLQUFMLEdBQWEsSUFBYjs7QUFDQSxVQUFHLEtBQUtHLElBQUwsQ0FBVUMsSUFBVixJQUFrQixJQUFyQixFQUEyQjtBQUN2QixZQUFJTSxHQUFHLEdBQUcsS0FBS1IsSUFBTCxDQUFVVCxNQUFNLENBQUN5QixJQUFqQixDQUFWOztBQUNBLFlBQUdSLEdBQUgsRUFBUTtBQUNKakIsVUFBQUEsTUFBTSxDQUFDc0IsSUFBUCxDQUFZQyxNQUFaLENBQW1CTixHQUFuQjtBQUNBakIsVUFBQUEsTUFBTSxDQUFDeUIsSUFBUDtBQUNIO0FBQ0osT0FORCxNQU1PO0FBQ0h6QixRQUFBQSxNQUFNLENBQUNzQixJQUFQLENBQVlJLE1BQVosQ0FBbUIsQ0FBbkI7QUFDSDtBQUNKO0FBQ0osR0F6Rkk7QUEyRkw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWM7QUFDbEIsUUFBRyxLQUFLbEIsSUFBTCxDQUFVbUIsQ0FBVixHQUFjLEtBQUtuQixJQUFMLENBQVVvQixNQUFWLENBQWlCRCxDQUEvQixHQUFtQyxDQUFDLEdBQXZDLEVBQTRDO0FBQ3hDLFdBQUtuQixJQUFMLENBQVVxQixPQUFWO0FBQ0g7QUFDSjtBQWhHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gcmVxdWlyZShcImdsb2JhbFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudG91Y2ggPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb3VudCA9IDA7XG5cbiAgICAgICAgdGhpcy50aXBzID0gW1xuICAgICAgICAgICAgXCLkvaDlnKjov5nph4zlgZznlZnnmoTmnInngrnkuYXkuoZ+XCIsXG4gICAgICAgICAgICBcIuiZveeEtuS4jeefpemBk+WJjeaWueacieS7gOS5iOWcqOetieedgOS9oH5cIixcbiAgICAgICAgICAgIFwi6L276L275oyJ5L2P5bGP5bmV5bCx5aW9flwiLFxuICAgICAgICAgICAgXCLkurrnlJ/lsLHmmK/lnKjkuI3muIXmpZrliY3mlrnmmK/lkKbmnInot6/nmoTml7blgJnkvp3nhLbopoHli4fmlaLnmoTouI/lh7p+XCIsXG4gICAgICAgICAgICBcIuivpeWHuuWPkeS6hn5cIixcbiAgICAgICAgICAgIFwi5LuO5YmN77yM5pyJ5Liq5YuH6ICF4oCm4oCmXCIsXG4gICAgICAgICAgICBcIuS9oOaDs+WQrOaIkeiusuaVheS6i+WQl++8n1wiLFxuICAgICAgICAgICAgXCLlvZPml7blubTlsJHnmoTkvaDvvIzmnInnnYDotoXpvoTnmoTmiJDnhp9cIixcbiAgICAgICAgICAgIFwi5L2g6JeP6Lqr5LiO5Lye5LiL77yM6L+e5Y+l5YaN6KeB5Lmf5rKh6K+0XCJcbiAgICAgICAgXTtcblxuICAgICAgICBpZih0aGlzLm5vZGUubW9kZSA9PSBcImMxXCIpIHtcbiAgICAgICAgICAgIHRoaXMudGlwcyA9IFtcbiAgICAgICAgICAgICAgICBcIuWwj+WNnOWSjOiKseeUn+aYr+Wlveaci+WPi35cIixcbiAgICAgICAgICAgICAgICBcIuS7luS7rOaAu+aYr+W+iOW/q+S5kOeahOWcqOS4gOi1t+eOqeiAjVwiLFxuICAgICAgICAgICAgICAgIFwi5L2G5piv6Iqx55Sf5b+D6YeM5b6I6Ieq5Y2RXCIsXG4gICAgICAgICAgICAgICAgXCLnu4jkuo7mnInkuIDlpKnvvIzlroPpl67lsI/ljZxcIixcbiAgICAgICAgICAgICAgICBcIuOAjuWwj+WNnO+8jOS9oOS4uuS7gOS5iOaEv+aEj+WSjOaIkeS4gOi1t+eOqeWRou+8n+OAj1wiLFxuICAgICAgICAgICAgICAgIFwi5bCP5Y2c5Zue562U77yM44CO5Zug5Li65oiR5Lus5piv5pyL5Y+L5ZWK44CPXCIsXG4gICAgICAgICAgICAgICAgXCLjgI7lj6/mmK/miJHmmK/oirHnlJ/igKbigKbjgI/oirHnlJ/kvLzkuY7mg7PopoHor7Tku4DkuYhcIixcbiAgICAgICAgICAgICAgICBcIuWwj+WNnOivtOOAjuS9oOaYr+iKseeUn++8jOWQjOaXtuS5n+aYr+aIkeeahOWlveaci+WPi+WViuOAj1wiLFxuICAgICAgICAgICAgICAgIFwi44CO5LiN77yM5oiR6ZqQ556S5LqG5L2g4oCm4oCm44CPXCIsXG4gICAgICAgICAgICAgICAgXCLoirHnlJ/pvJPotrPkuobli4fmsJRcIixcbiAgICAgICAgICAgICAgICBcIuOAjuiKseeUn+S4jeaYr+mVv+aIkei/meagt+eahOKApuKApuaIkeaYr+S4quKApuKApuOAj1wiLFxuICAgICAgICAgICAgICAgIFwi44CO5oiR5piv5Liq5q2j5pa55b2i55qE6Iqx55SfIeOAj1wiLFxuICAgICAgICAgICAgICAgIFwi6Iqx55Sf5oaL57qi5LqG6IS44oCm4oCm44CO55yf5q2j55qE6Iqx55Sf5piv5qSt5ZyG5b2i55qE4oCm4oCm44CPXCIsXG4gICAgICAgICAgICAgICAgXCLlm6DkuLrmmK/mnIvlj4vvvIzoirHnlJ/kuI3mg7PmrLrpqpflsI/ljZxcIixcbiAgICAgICAgICAgICAgICBcIuS9huS5n+WboOS4uuaYr+aci+WPi++8jOiKseeUn+W+iOWus+aAleWwj+WNnOemu+W8gFwiLFxuICAgICAgICAgICAgICAgIFwi6Iqx55Sf5rKh5pyJ5YW25LuW5pyL5Y+L77yM5Zug5Li65LuWXCIsXG4gICAgICAgICAgICAgICAgXCLlm6DkuLrku5bmmK/mraPmlrnlvaLnmoTigKbigKboirHnlJ9cIixcbiAgICAgICAgICAgICAgICBcIuayoeacieS4gOS4quato+W4uOeahOiKseeUn+aEv+aEj+WSjOato+aWueW9oueahOiKseeUn+WBmuaci+WPi1wiLFxuICAgICAgICAgICAgICAgIFwi4oCm4oCmXCIsXG4gICAgICAgICAgICAgICAgXCLoirHnlJ/lgbflgbfnmoTnnoTkuobkuIDnnLzlsI/ljZxcIixcbiAgICAgICAgICAgICAgICBcIuOAjuWPr+aYr+S9oOaYr+iKseeUn+WViuOAj+Wwj+WNnOivtFwiLFxuICAgICAgICAgICAgICAgIFwi44CO5L2g5bCx5piv5L2g77yM5L2g5piv5oiR55qE5pyL5Y+L77yM6Iqx55Sf5ZWK44CP5bCP5Y2c6K+0XCIsXG4gICAgICAgICAgICAgICAgXCLoirHnlJ/lkYbkvY/kuoZcIixcbiAgICAgICAgICAgICAgICBcIui/meaYr+esrOS4gOasoeacieS6uuWvueS7luivtOi/meagt+eahOivnVwiLFxuICAgICAgICAgICAgICAgIFwi6Iqx55Sf5byA5aeL5oq95rOjXCIsXG4gICAgICAgICAgICAgICAgXCLosKLosKLvvIzpnZ7luLjmhJ/osKLigKbigKbigKbigKbosKLosKLkvaDvvIzlsI/ljZzigKbigKbigKbigKZcIixcbiAgICAgICAgICAgICAgICBcIuiKseeUn+S4gOi+ueWTre+8jOS4gOi+uemBk+iwolwiLFxuICAgICAgICAgICAgICAgIFwi5bCP5Y2c5LiN5piO55m96Iqx55Sf5Li65LuA5LmI5ZOtXCIsXG4gICAgICAgICAgICAgICAgXCLkuIDnm7TkuZ/kuI3mmI7nmb1cIixcbiAgICAgICAgICAgICAgICBcIuKApuKAplwiLFxuICAgICAgICAgICAgICAgIFwi44CO5bCP5Y2c5LiO6Iqx55Sf44CPMSBlbmR+XCIsXG4gICAgICAgICAgICAgICAgXCLjgI7lsI/ljZzkuI7oirHnlJ/jgI8xIGVuZH5cIixcbiAgICAgICAgICAgICAgICBcIuOAjuWwj+WNnOS4juiKseeUn+OAjzEgZW5kflwiLFxuICAgICAgICAgICAgICAgIFwi44CO5bCP5Y2c5LiO6Iqx55Sf44CPMSBlbmR+XCIsXG4gICAgICAgICAgICAgICAgXCLjgI7lsI/ljZzkuI7oirHnlJ/jgI8xIGVuZH5cIixcbiAgICAgICAgICAgICAgICBcIueCueWHu+W3puS4i+inkuaMiemSruWPr+S7pemAgOWHuue7g+S5oOaooeW8j1wiXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uIChvdGhlciwgc2VsZikge1xuICAgICAgICB0aGlzLmNvdW50Kys7XG5cbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm94MVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm94MlwiKS5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGlmKHRoaXMuY291bnQgPiA3ICYmIHRoaXMubm9kZS5tb2RlICE9IFwiYzFcIikge1xuICAgICAgICAgICAgdmFyIHRpcCA9IHRoaXMudGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRpcHMubGVuZ3RoKV07XG4gICAgICAgICAgICBnbG9iYWwuZ2FtZS5zZXRUaXAodGlwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAwICYmICF0aGlzLnRvdWNoKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmKHRoaXMubm9kZS5tb2RlID09IFwiYzFcIikge1xuICAgICAgICAgICAgICAgIHZhciB0aXAgPSB0aGlzLnRpcHNbZ2xvYmFsLndvcmRdO1xuICAgICAgICAgICAgICAgIGlmKHRpcCkge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuZ2FtZS5zZXRUaXAodGlwKTtcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsLndvcmQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5nYW1lLnNldE51bSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG4gICAgICAgIGlmKHRoaXMubm9kZS54ICsgdGhpcy5ub2RlLnBhcmVudC54IDwgLTQwMCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==