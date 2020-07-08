const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const domino = require('domino');
const es = require('event-stream');
const del = require('del');
const tsNode = require('ts-node').register({
    transpileOnly: true,
    compilerOptions: {
        module: "commonjs",
        allowJs: true
    }
});
const argv = require("yargs").argv;


const window = domino.createWindow('<!doctype html><html><body></body></html>');
global.HTMLElement = window.HTMLElement;



function requireFile(path) {
    delete require.cache[require.resolve(path)];
    return require(path);
}

gulp.task("generate-live-editing", (done) => {
    const liveEditing = requireFile("./live-editing/LiveEditingManager.ts");
    const manager = new liveEditing.LiveEditingManager();
    var appDv = argv.appDv !== undefined && argv.appDv.toLowerCase().trim() === "true"
    var compileSass = argv.css !== undefined && argv.css.toLowerCase().trim() === "true"

    manager.run(appDv, compileSass);
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
const excludedDirectories = ["data", "index", "assets", "environment"];
const repositoryfy = (projectPath) => {
    const directories = [];
    const appDir = fs.readdirSync(projectPath + "/app", "utf-8");
    appDir.filter(dir => excludedDirectories.indexOf(dir) === -1 )
          .forEach(child => {
            if(fs.lstatSync(`${projectPath + "/app"}/${child}`).isDirectory()) {
                directories.push(child);
            }
    });
    const jsonSamplesPath = path.join(__dirname, `${projectPath}/assets/samples`);
    const sharedJson = JSON.parse(fs.readFileSync(jsonSamplesPath + "/shared.json"));
    const devDependencies = JSON.parse(fs.readFileSync("package.json")).devDependencies;
    return gulp.src([`${jsonSamplesPath}/*.json`,`!${jsonSamplesPath}/shared.json`, `!${jsonSamplesPath}/meta.json`])
               .pipe(es.map((file, cb) => {
                   console.log(file.path);
                    fs.readFile(file.path, 'utf-8', (err, content) => {
                        const jsonObj = JSON.parse(content);
                        const packageJson = {
                            "path": "package.json",
                            "hasRelativeAssetsUrls": false,
                            "content": JSON.stringify({"dependencies": JSON.parse(jsonObj.sampleDependencies), "devDependencies": devDependencies})
                        }
                        jsonObj.sampleFiles = jsonObj.sampleFiles.concat(sharedJson.files).concat(packageJson);
                        const fileName = file.path.substring(file.base.length + 1);
                        const sampleBase = directories.find(d => {
                            return fileName.indexOf(d + "-") !== -1 && fileName.indexOf(d + "-") === 0;
                        })
                        if(!fs.existsSync("test-angular-samples/samples/" + sampleBase)) {
                            fs.mkdirSync("test-angular-samples/samples/" + sampleBase);
                        }
                        const sampleName = fileName.replace(sampleBase + "-", "").replace(".json", "");
                        const sampleAppPath = "test-angular-samples/samples/" + sampleBase + "/" + sampleName;
                        if(!fs.existsSync(sampleAppPath)) {
                            fs.mkdirSync(sampleAppPath);
                        }

                        jsonObj.sampleFiles.forEach(sampleFile => {
                            const paths = sampleFile.path.replace("./", "").split("/");
                            let tempPath = "";
                            paths.forEach(p => {
                                tempPath += p + "/";
                                if(p.indexOf(".") !== -1) {
                                    fs.writeFileSync(sampleAppPath + "/" + tempPath, sampleFile.content);
                                } else
                                if(!fs.existsSync(sampleAppPath + "/" + tempPath)) {
                                    fs.mkdirSync(sampleAppPath + "/" + tempPath)
                                }
                            })
                        });

                        cb(null, file);
                    })
               }))
               .on("error", () => console.log(err));
}

gulp.task("repositoryfy", () => {
    return repositoryfy("src")
})
