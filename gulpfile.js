const gulp = require("gulp");
const tsNode = require('ts-node').register({
    fast: true,
    ignore: [/\/node_modules\/(?!igniteui-angular)/],
    compilerOptions: {
        allowJs: true
    }
});
var Promise = require('bluebird');
var requirejs = require('requirejs');

function requirejsOptimize(config) {
    console.log("GULP requirejsOptimize");
    config.logLevel = 1;
    return new Promise(function(resolve, reject) {
        requirejs.optimize(config, resolve, reject);
    });
}

function requireFile(path) {
    delete require.cache[require.resolve(path)];
    return require(path);
}

gulp.task("generate-live-editing", () => {
    console.log("GULP task generate-live-editing");
    requireFile("./live-editing/LiveEditingManager.ts");
});

gulp.task("watch-live-editing", ["generate-live-editing"], () => {
    gulp.watch(["./src/**/*.*", "!./src/assets/**", "./live-editing/**/*.*", "package.json"], function () {
        Object.keys(require.cache).forEach(function (key) {
            if (key.indexOf("node_modules") === -1) {
                delete require.cache[key];
            }
        });

        gulp.start("generate-live-editing");
    });
});

gulp.task("sass-js-compile-check", async() => {
    var checker = requireFile("./live-editing/services/SassJsCompileChecker.ts");
    await checker.sassJsCompileChecker.run();
});
