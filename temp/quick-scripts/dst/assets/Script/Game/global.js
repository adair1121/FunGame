
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd2b4/MBsxJkpnGL8hwHSI4', 'global');
// Script/Game/global.js

"use strict";

module.exports = {
  distance: 0
};
Math.seed = Math.random() * 100000;

Math.seededRandom = function (max, min) {
  max = max || 1;
  min = min || 0;
  Math.seed = (Math.seed * 9301 + 49297) % 233280;
  var rnd = Math.seed / 233280.0;
  return min + rnd * (max - min);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9nbG9iYWwuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRpc3RhbmNlIiwiTWF0aCIsInNlZWQiLCJyYW5kb20iLCJzZWVkZWRSYW5kb20iLCJtYXgiLCJtaW4iLCJybmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxRQUFRLEVBQUU7QUFERyxDQUFqQjtBQUlBQyxJQUFJLENBQUNDLElBQUwsR0FBWUQsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLE1BQTVCOztBQUNBRixJQUFJLENBQUNHLFlBQUwsR0FBb0IsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQ25DRCxFQUFBQSxHQUFHLEdBQUdBLEdBQUcsSUFBSSxDQUFiO0FBQ0FDLEVBQUFBLEdBQUcsR0FBR0EsR0FBRyxJQUFJLENBQWI7QUFDQUwsRUFBQUEsSUFBSSxDQUFDQyxJQUFMLEdBQVksQ0FBQ0QsSUFBSSxDQUFDQyxJQUFMLEdBQVksSUFBWixHQUFtQixLQUFwQixJQUE2QixNQUF6QztBQUNBLE1BQUlLLEdBQUcsR0FBR04sSUFBSSxDQUFDQyxJQUFMLEdBQVksUUFBdEI7QUFDQSxTQUFPSSxHQUFHLEdBQUdDLEdBQUcsSUFBSUYsR0FBRyxHQUFHQyxHQUFWLENBQWhCO0FBQ0gsQ0FORCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZGlzdGFuY2U6IDBcbn07XG5cbk1hdGguc2VlZCA9IE1hdGgucmFuZG9tKCkgKiAxMDAwMDA7XG5NYXRoLnNlZWRlZFJhbmRvbSA9IGZ1bmN0aW9uKG1heCwgbWluKSB7XG4gICAgbWF4ID0gbWF4IHx8IDE7XG4gICAgbWluID0gbWluIHx8IDA7XG4gICAgTWF0aC5zZWVkID0gKE1hdGguc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgdmFyIHJuZCA9IE1hdGguc2VlZCAvIDIzMzI4MC4wO1xuICAgIHJldHVybiBtaW4gKyBybmQgKiAobWF4IC0gbWluKTtcbn07Il19