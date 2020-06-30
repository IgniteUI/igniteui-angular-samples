const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const domino = require('domino');
const es = require('event-stream');
const fsExtra = require("fs-extra");
const tsNode = require('ts-node').register({
    transpileOnly: true,
    compilerOptions: {
        module: "commonjs",
        allowJs: true
    }
});
const argv = require("yargs").argv;

const submodule = "igniteui-live-editing-samples";

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

const excludedDirectories = ["index", "assets", "environment"];

const getSampleNameFromFileName = (fileName, sampleBaseDir) => fileName.replace(sampleBaseDir + "--", "");
var assetsRegex = new RegExp("\/?assets\/", "g");

const processApp = (projectPath, dest, directoriesToExclude, compileSass) => {
    if(!fs.existsSync(submodule)) {
        return console.error("No submodule found");
    }
    const directories = [];
    const appExcludedDirectories = excludedDirectories.concat(directoriesToExclude);
    const appDir = fs.readdirSync(projectPath + "/app", "utf-8");
    appDir.filter(dir => appExcludedDirectories.indexOf(dir) === -1 )
          .forEach(child => {
            if(fs.lstatSync(`${projectPath + "/app"}/${child}`).isDirectory()) {
                directories.push(child);
            }
    });
    const jsonSamplesPath = path.join(__dirname, `${projectPath}/assets/samples${compileSass ? "/css-support" : ""}`);
    const sharedJson = JSON.parse(fs.readFileSync(path.join(jsonSamplesPath, "/shared.json")));
    const submoduleAppDest = submodule + `/${dest}/${compileSass ? "css-support/":""}`;
    if(!fs.existsSync(submoduleAppDest)) {
        fs.mkdirSync(submoduleAppDest);
    }

    let i = 0;
    return gulp.src([`${jsonSamplesPath}/*.json`,`!${jsonSamplesPath}/shared.json`, `!${jsonSamplesPath}/meta.json`])
               .pipe(es.map((file, cb) => {
                    fs.readFile(file.path, 'utf-8', (err, content) => {
                        // Adjust sample application bundle files
                        const jsonObj = JSON.parse(content);
                        const packageJson = 
                        {
                            "path": "package.json",
                            "hasRelativeAssetsUrls": false,
                            "content": JSON.stringify({
                                    "dependencies": JSON.parse(jsonObj.sampleDependencies),
                                    "devDependencies": sharedJson.devDependencies }, null, 2)
                        }
                        jsonObj.sampleFiles = jsonObj.sampleFiles.concat(sharedJson.files).concat(packageJson);

                        // Configure sample application file structure
                        const fileName = file.path.substring(file.base.length + 1).replace(".json", "");
                        let sampleBaseDir = fileName.indexOf("--") !== -1 ? fileName.substring(0, fileName.indexOf("--")) : "";
                        if(sampleBaseDir && !fs.existsSync(submoduleAppDest + sampleBaseDir)) {
                            fs.mkdirSync(submoduleAppDest + sampleBaseDir);
                        }
                        const sampleName = sampleBaseDir ? getSampleNameFromFileName(fileName, sampleBaseDir) : fileName;
                        const sampleAppPath = submoduleAppDest + sampleBaseDir + "/" + sampleName;
                        if(!fs.existsSync(sampleAppPath)) {
                            fs.mkdirSync(sampleAppPath);
                        }

                        // Distribute Sample Files
                        jsonObj.sampleFiles.forEach(sampleFile => {
                            let sampleContent;
                            const isProduction = argv.prod !== undefined && argv.prod.toLowerCase().trim() === "true";
                            const assetsUrl = `https://${isProduction ? "www." : "staging."}infragistics.com/${dest}/assets/`;
                            if(sampleFile.hasRelativeAssetsUrls) {
                                sampleContent = sampleFile.content.replace(assetsRegex, assetsUrl);
                            } else {
                                sampleContent = sampleFile.content;
                            }
                            const paths = sampleFile.path.replace("./", "").split("/");
                            let tempPath = "";
                            paths.forEach(p => {
                                tempPath += p + "/";
                                if(p.indexOf(".") !== -1) {
                                    fs.writeFileSync(sampleAppPath + "/" + tempPath, sampleContent);
                                } else
                                if(!fs.existsSync(sampleAppPath + "/" + tempPath)) {
                                    fs.mkdirSync(sampleAppPath + "/" + tempPath)
                                }
                            })
                        });
                        i++;
                        console.log(`Processing ${fileName}.json with ${compileSass ? "CSS" : "SCSS" } styling`);
                        cb(null, file);
                    })
               }))
               .on("error", () => console.log(err))
               .on("end", () => console.log(`Geneared ${i} applications with ${compileSass ? "CSS" : "SCSS" } in ${dest.toUpperCase()} project.`));
}

const processDemosWithScss = () =>  processApp("src", "angular-demos", "data", false);
const processDemosLobWithScss = () => processApp("projects/app-lob/src", "angular-demos-lob", "services", false);

const processDemosWithCss = () =>  processApp("src", "angular-demos", "data", true);
const processDemosLobWithCss = () => processApp("projects/app-lob/src", "angular-demos-lob", "services", true);

let repositoryfyAngularDemos;
let repositoryfyAngularDemosLob;

const cleanupAngularDemos = (cb) => {
    fsExtra.removeSync(submodule + "/angular-demos");
    fsExtra.mkdirSync(submodule + "/angular-demos");
    cb();
}

const cleanupAngularDemosLob = (cb) => {
    fsExtra.removeSync(submodule + "/angular-demos-lob");
    fsExtra.mkdirSync(submodule + "/angular-demos-lob");
    cb();
}
exports.repositoryfyAngularDemos = repositoryfyAngularDemos = gulp.series(cleanupAngularDemos, gulp.parallel(processDemosWithScss, processDemosWithCss));
exports.repositoryfyAngularDemosLob = repositoryfyAngularDemosLob =  gulp.series(cleanupAngularDemosLob, gulp.parallel(processDemosLobWithScss, processDemosLobWithCss));


