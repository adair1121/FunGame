
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Block/ball');
require('./assets/Script/Block/box');
require('./assets/Script/Block/gan');
require('./assets/Script/Block/gan1');
require('./assets/Script/Block/spring');
require('./assets/Script/Game/gameover');
require('./assets/Script/Game/global');
require('./assets/Script/Role/boo');
require('./assets/Script/Role/boo2');
require('./assets/Script/Role/yin');
require('./assets/Script/Scene/Leitai');
require('./assets/Script/Scene/c1');
require('./assets/Script/Scene/main');
require('./assets/Script/Scene/menu');
require('./assets/Script/Scene/stamp');
require('./assets/Script/domain');
require('./assets/Script/prop/big');
require('./assets/Script/prop/down');
require('./assets/Script/prop/prop');
require('./assets/Script/prop/small');
require('./assets/Script/prop/up');
require('./assets/migration/use_v2.0.x_cc.Toggle_event');

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