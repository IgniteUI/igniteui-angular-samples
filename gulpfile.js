const gulp = require("gulp");
const fs = require("fs");
const domino = require('domino');
const tsNode = require('ts-node').register({
    transpileOnly: true,
    ignore: [/\/node_modules\/(?!igniteui-angular)/],
    compilerOptions: {
        module: "commonjs",
        allowJs: true
    }
});
const argv = require("yargs").argv;


// Workaround for require error with LiveEditingManager and charts
global['KeyboardEvent'] = null
global['MouseEvent'] = null
global['Event'] = null
global['FocusEvent'] = null
global['PointerEvent'] = null

const window = domino.createWindow('<!doctype html><html><body></body></html>');
global.HTMLElement = window.HTMLElement;

//  Workaround for exception with Excel samples running product code during generate-live-editing task.
navigator = { language: "en-US" };

function requireFile(path) {
    delete require.cache[require.resolve(path)];
    return require(path);
}

gulp.task("generate-live-editing", (done) => {
    const liveEditing = requireFile("./live-editing/LiveEditingManager.ts");
    const manager = new liveEditing.LiveEditingManager();
    var appDv = argv.appDv !== undefined && argv.appDv.toLowerCase().trim() === "true"
    if(appDv) {
        manager.run(true);
    } else {
        manager.run();
    }
    done();
});

gulp.task("overwrite-package-json", (done) => {
    const packagesPaths = ["./node_modules/igniteui-angular-charts/package.json", "./node_modules/igniteui-angular-core/package.json", "./node_modules/igniteui-angular-excel/package.json", "./node_modules/igniteui-angular-gauges/package.json", "./node_modules/igniteui-angular-spreadsheet/package.json"];
    packagesPaths.forEach((packagePath) => {
        const package = require(packagePath);
        fs.writeFileSync(packagePath, JSON.stringify(package));
    });
    done();
});

gulp.task("watch-live-editing", gulp.series("generate-live-editing", () => {
    gulp.watch(["./src/**/*.*", "!./src/assets/**", "./live-editing/**/*.*", "package.json"], function () {
        Object.keys(require.cache).forEach(function (key) {
            if (key.indexOf("node_modules") === -1) {
                delete require.cache[key];
            }
        });

        gulp.start("generate-live-editing");
    });
}));

gulp.task("sass-js-compile-check", async() => {
    var checker = requireFile("./live-editing/services/SassJsCompileChecker.ts");
    await checker.sassJsCompileChecker.run();
});
