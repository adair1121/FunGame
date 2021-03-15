
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Block/ball.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfa36vxPJxK5IyNgIIdOrPo', 'ball');
// Script/Block/ball.js

"use strict";

var global = require("global");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // use this for initialization
  onLoad: function onLoad() {
    this.tips = ["When the world turns its back on you, you turn your back on the world.", "如果这个世界对你不理不睬，你也可以这样对待它。", "I’m only brave when I have to be. Being brave doesn’t mean you go looking for trouble.", "我只是在必要的时候才会勇敢，勇敢并不代表你要到处闯祸。", "Yes, the past can hurt. But I think you can either run from it or learn from it. ", "对，过去是痛楚的，但我认为你要么可以逃避，要么可以向它学习。", "Everything you see exists together in a delicate balance.", "世界上所有的生命都在微妙的平衡中生存。", "世界上所有的生命都有他存在的价值。", "身为国王，你不但要了解，还要去尊重所有的生命，包括爬行的蚂蚁和跳跃的羚羊。", "you are more than what you have become.", "你要记住，你是谁。", "你看那些星星， 过去那些伟大的君王从那些星星上看着我们呢。", "你要记住，靠着太阳走，看这世间生生不息，生生不息。"];
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (other.tag == 0) {
      this.node.getChildByName("ball1").active = false;
      this.node.getChildByName("ball2").active = true;
      var finished = cc.callFunc(function () {
        this.node.destroy();
      }, this);
      var action = cc.sequence(cc.fadeOut(0.4), finished);
      this.node.runAction(action); // var tip = this.tips[Math.floor(Math.random() * this.tips.length)];
      // global.game.setTip(tip);

      global.game.setNum(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQmxvY2svYmFsbC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJ0aXBzIiwib25Db2xsaXNpb25FbnRlciIsIm90aGVyIiwic2VsZiIsInRhZyIsIm5vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsImZpbmlzaGVkIiwiY2FsbEZ1bmMiLCJkZXN0cm95IiwiYWN0aW9uIiwic2VxdWVuY2UiLCJmYWRlT3V0IiwicnVuQWN0aW9uIiwiZ2FtZSIsInNldE51bSIsInVwZGF0ZSIsImR0IiwieCIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxNQUFNLEdBQUdDLE9BQU8sQ0FBQyxRQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLQyxJQUFMLEdBQVksQ0FDUix3RUFEUSxFQUVSLHlCQUZRLEVBSVIsd0ZBSlEsRUFLUiw2QkFMUSxFQU9SLG1GQVBRLEVBUVIsZ0NBUlEsRUFVUiwyREFWUSxFQVdSLHFCQVhRLEVBYVIsbUJBYlEsRUFjUix1Q0FkUSxFQWdCUix5Q0FoQlEsRUFpQlIsV0FqQlEsRUFtQlIsK0JBbkJRLEVBb0JSLDJCQXBCUSxDQUFaO0FBd0JILEdBakNJO0FBbUNMQyxFQUFBQSxnQkFBZ0IsRUFBRSwwQkFBVUMsS0FBVixFQUFpQkMsSUFBakIsRUFBdUI7QUFDckMsUUFBR0QsS0FBSyxDQUFDRSxHQUFOLElBQWEsQ0FBaEIsRUFBbUI7QUFDZixXQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsT0FBekIsRUFBa0NDLE1BQWxDLEdBQTJDLEtBQTNDO0FBQ0EsV0FBS0YsSUFBTCxDQUFVQyxjQUFWLENBQXlCLE9BQXpCLEVBQWtDQyxNQUFsQyxHQUEyQyxJQUEzQztBQUVBLFVBQUlDLFFBQVEsR0FBR2IsRUFBRSxDQUFDYyxRQUFILENBQVksWUFBVztBQUNsQyxhQUFLSixJQUFMLENBQVVLLE9BQVY7QUFDSCxPQUZjLEVBRVosSUFGWSxDQUFmO0FBR0EsVUFBSUMsTUFBTSxHQUFHaEIsRUFBRSxDQUFDaUIsUUFBSCxDQUFZakIsRUFBRSxDQUFDa0IsT0FBSCxDQUFXLEdBQVgsQ0FBWixFQUE2QkwsUUFBN0IsQ0FBYjtBQUNBLFdBQUtILElBQUwsQ0FBVVMsU0FBVixDQUFvQkgsTUFBcEIsRUFSZSxDQVVmO0FBQ0E7O0FBRUFsQixNQUFBQSxNQUFNLENBQUNzQixJQUFQLENBQVlDLE1BQVosQ0FBbUIsQ0FBbkI7QUFDSDtBQUNKLEdBbkRJO0FBcURMO0FBQ0FDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsRUFBVixFQUFjO0FBQ2xCLFFBQUcsS0FBS2IsSUFBTCxDQUFVYyxDQUFWLEdBQWMsS0FBS2QsSUFBTCxDQUFVZSxNQUFWLENBQWlCRCxDQUEvQixHQUFtQyxDQUFDLEdBQXZDLEVBQTRDO0FBQ3hDLFdBQUtkLElBQUwsQ0FBVUssT0FBVjtBQUNIO0FBQ0o7QUExREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHJlcXVpcmUoXCJnbG9iYWxcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpcHMgPSBbXG4gICAgICAgICAgICBcIldoZW4gdGhlIHdvcmxkIHR1cm5zIGl0cyBiYWNrIG9uIHlvdSwgeW91IHR1cm4geW91ciBiYWNrIG9uIHRoZSB3b3JsZC5cIixcbiAgICAgICAgICAgIFwi5aaC5p6c6L+Z5Liq5LiW55WM5a+55L2g5LiN55CG5LiN552s77yM5L2g5Lmf5Y+v5Lul6L+Z5qC35a+55b6F5a6D44CCXCIsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFwiSeKAmW0gb25seSBicmF2ZSB3aGVuIEkgaGF2ZSB0byBiZS4gQmVpbmcgYnJhdmUgZG9lc27igJl0IG1lYW4geW91IGdvIGxvb2tpbmcgZm9yIHRyb3VibGUuXCIsXG4gICAgICAgICAgICBcIuaIkeWPquaYr+WcqOW/heimgeeahOaXtuWAmeaJjeS8muWLh+aVou+8jOWLh+aVouW5tuS4jeS7o+ihqOS9oOimgeWIsOWkhOmXr+eluOOAglwiLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcIlllcywgdGhlIHBhc3QgY2FuIGh1cnQuIEJ1dCBJIHRoaW5rIHlvdSBjYW4gZWl0aGVyIHJ1biBmcm9tIGl0IG9yIGxlYXJuIGZyb20gaXQuIFwiLFxuICAgICAgICAgICAgXCLlr7nvvIzov4fljrvmmK/nl5vmpZrnmoTvvIzkvYbmiJHorqTkuLrkvaDopoHkuYjlj6/ku6XpgIPpgb/vvIzopoHkuYjlj6/ku6XlkJHlroPlrabkuaDjgIJcIixcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXCJFdmVyeXRoaW5nIHlvdSBzZWUgZXhpc3RzIHRvZ2V0aGVyIGluIGEgZGVsaWNhdGUgYmFsYW5jZS5cIixcbiAgICAgICAgICAgIFwi5LiW55WM5LiK5omA5pyJ55qE55Sf5ZG96YO95Zyo5b6u5aaZ55qE5bmz6KGh5Lit55Sf5a2Y44CCXCIsXG5cbiAgICAgICAgICAgIFwi5LiW55WM5LiK5omA5pyJ55qE55Sf5ZG96YO95pyJ5LuW5a2Y5Zyo55qE5Lu35YC844CCXCIsXG4gICAgICAgICAgICBcIui6q+S4uuWbveeOi++8jOS9oOS4jeS9huimgeS6huino++8jOi/mOimgeWOu+WwiumHjeaJgOacieeahOeUn+WRve+8jOWMheaLrOeIrOihjOeahOiaguiageWSjOi3s+i3g+eahOe+mue+iuOAglwiLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcInlvdSBhcmUgbW9yZSB0aGFuIHdoYXQgeW91IGhhdmUgYmVjb21lLlwiLFxuICAgICAgICAgICAgXCLkvaDopoHorrDkvY/vvIzkvaDmmK/osIHjgIJcIixcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXCLkvaDnnIvpgqPkupvmmJ/mmJ/vvIwg6L+H5Y676YKj5Lqb5Lyf5aSn55qE5ZCb546L5LuO6YKj5Lqb5pif5pif5LiK55yL552A5oiR5Lus5ZGi44CCXCIsXG4gICAgICAgICAgICBcIuS9oOimgeiusOS9j++8jOmdoOedgOWkqumYs+i1sO+8jOeci+i/meS4lumXtOeUn+eUn+S4jeaBr++8jOeUn+eUn+S4jeaBr+OAglwiLFxuXG4gICAgICAgIF07XG5cbiAgICB9LFxuXG4gICAgb25Db2xsaXNpb25FbnRlcjogZnVuY3Rpb24gKG90aGVyLCBzZWxmKSB7XG4gICAgICAgIGlmKG90aGVyLnRhZyA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYWxsMVwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJhbGwyXCIpLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciBmaW5pc2hlZCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5mYWRlT3V0KDAuNCksIGZpbmlzaGVkKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcblxuICAgICAgICAgICAgLy8gdmFyIHRpcCA9IHRoaXMudGlwc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRpcHMubGVuZ3RoKV07XG4gICAgICAgICAgICAvLyBnbG9iYWwuZ2FtZS5zZXRUaXAodGlwKTtcblxuICAgICAgICAgICAgZ2xvYmFsLmdhbWUuc2V0TnVtKDEpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5ub2RlLnggKyB0aGlzLm5vZGUucGFyZW50LnggPCAtNDAwKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19