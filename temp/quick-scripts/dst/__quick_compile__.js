
(function () {
var scripts = [{"deps":{"./assets/Script/prop/small":1,"./assets/Script/domain":2,"./assets/migration/use_v2.0.x_cc.Toggle_event":3,"./assets/Script/Block/box":4,"./assets/Script/Scene/main":5,"./assets/Script/prop/big":6,"./assets/Script/prop/up":7,"./assets/Script/Scene/Leitai":8,"./assets/Script/Scene/menu":9,"./assets/Script/Game/global":10,"./assets/Script/Role/boo2":11,"./assets/Script/Game/gameover":12,"./assets/Script/Block/gan":13,"./assets/Script/Block/spring":14,"./assets/Script/Block/ball":15,"./assets/Script/Role/boo":16,"./assets/Script/Block/gan1":17,"./assets/Script/Role/yin":18,"./assets/Script/prop/down":19,"./assets/Script/Scene/c1":20,"./assets/Script/Scene/stamp":21,"./assets/Script/prop/prop":22},"path":"preview-scripts/__qc_index__.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/prop/small.js"},{"deps":{},"path":"preview-scripts/assets/Script/domain.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.0.x_cc.Toggle_event.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Block/box.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Scene/main.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/prop/big.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/prop/up.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Scene/Leitai.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Scene/menu.js"},{"deps":{},"path":"preview-scripts/assets/Script/Game/global.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Role/boo2.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Game/gameover.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Block/gan.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Block/spring.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Block/ball.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Role/boo.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Block/gan1.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Role/yin.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/prop/down.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Scene/c1.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/Scene/stamp.js"},{"deps":{"global":10},"path":"preview-scripts/assets/Script/prop/prop.js"}];
var entries = ["preview-scripts/__qc_index__.js"];

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

if (typeof global === 'undefined') {
    window.global = window;
}

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;
        
            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
        
            return path;
        });

        loadScripts(srcs, function () {
            self.run();
            cb();
        });
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    