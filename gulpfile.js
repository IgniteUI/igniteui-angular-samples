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
const { generateLiveEditing } = require('igniteui-live-editing');
const argv = require("yargs").argv;

const submodule = "igniteui-live-editing-samples";

gulp.task("generate-live-editing", async () => {
    var appDv = argv.appDv !== undefined && argv.appDv.toLowerCase().trim() === "true";
    const liveEditingOptions = appDv ?
        {
            platform: 'angular',
            projectDir: "./projects/app-lob",
            samplesDir: "./projects/app-lob/src/assets",
            configGeneratorPath: "./live-editing/generators/AppDVConfigGenerators.ts",
            module: {
                moduleName: "DV_MODULE_ROUTES", routerPath: './live-editing/Routes.ts',
            }
        }
        :
        (argv.appCrm  ?
            {
                platform: 'angular',
                projectDir: "./projects/app-crm",
                samplesDir: "./projects/app-crm/src/assets",
                configGeneratorPath: "./live-editing/generators/AppCRMConfigGenerators.ts",
                module: {
                    moduleName: "CRM_MODULE_ROUTES", routerPath: './live-editing/Routes.ts',
                }
            }
            :
            {
                platform: 'angular',
                samplesDir: "./src/assets",
                configGeneratorPath: "./live-editing/generators/ConfigGenerators.ts",
                module: {
                    moduleName: "MODULE_ROUTES", routerPath: './live-editing/Routes.ts',
                },
                additionalSharedStyles: ["_variables.scss", "_app-layout.scss"]
            })
    await generateLiveEditing(liveEditingOptions);
});

gulp.task("overwrite-package-json", (done) => {
    const packagesPaths = ["./node_modules/igniteui-angular-charts/package.json", "./node_modules/igniteui-angular-core/package.json"];
    packagesPaths.forEach((packagePath) => {
        const package = require(packagePath);
        fs.writeFileSync(packagePath, JSON.stringify(package));
    });
    done();
});

const createPrependerdLobStructure = (cb) => {
    const folders = [
        './dist/app-lob/samples',
        './dist/app-lob/samples/grid',
        './dist/app-lob/samples/tree-grid',
        './dist/app-lob/samples/grid-finjs-dock-manager',
        './dist/app-lob/samples/hierarchical-grid',
        './dist/app-lob/grid',
        './dist/app-lob/tree-grid',
        './dist/app-lob/grid-finjs-dock-manager',
        './dist/app-lob/hierarchical-grid'
    ];
    folders.forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
    });
    cb();
}

const addPrerenderedLobPages = (cb) => {
    const { metadata } = require('./projects/app-lob/src/app/metadata');
    const indexFilePath = path.resolve(__dirname, './', 'dist/app-lob', 'index.html');

    // read in the index.html file
    fs.readFile(indexFilePath, 'utf8', function (err, data) {
        if (err) {
            return console.error(err);
        }

        metadata.forEach(({ url, title, description, og_url, folder }) => {
            let result = data;
            result = result.replace(/\$OG_TITLE/g, title);
            result = result.replace(/\$OG_DESCRIPTION/g, description);
            result = result.replace(/\$OG_URL/g, og_url);

            let filename = url.substring(1).replace(/\//g, '-');
            if (filename.length) {
                filename = filename + '.html';
            } else {
                filename = 'index.html';
            }

            fs.writeFile(path.resolve(__dirname, './', './dist/app-lob/samples/' + folder, filename), result, (err) => {
                if (err) {
                    console.log(err);
                }
            });
            fs.writeFile(path.resolve(__dirname, './', './dist/app-lob/' + folder, filename), result, (err) => {
                if (err) {
                    console.log(err);
                }
            });
        })
    })
    cb();
}

exports.prerenderPages = gulp.series(createPrependerdLobStructure, addPrerenderedLobPages);

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

const excludedDirectories = ["index", "assets", "environment"];

const getSampleNameFromFileName = (fileName, sampleBaseDir) => fileName.replace(sampleBaseDir + "--", "");
var assetsRegex = new RegExp(/([\.]{0,2}\/)*assets\//g);

const processApp = (projectPath, dest, directoriesToExclude) => {
    if (!fs.existsSync(submodule)) {
        return console.error("No submodule found");
    }
    const directories = [];
    const appExcludedDirectories = excludedDirectories.concat(directoriesToExclude);
    const appDir = fs.readdirSync(projectPath + "/app", "utf-8");
    appDir.filter(dir => appExcludedDirectories.indexOf(dir) === -1)
        .forEach(child => {
            if (fs.lstatSync(`${projectPath + "/app"}/${child}`).isDirectory()) {
                directories.push(child);
            }
        });

    const jsonSamplesPath = path.join(__dirname, `${projectPath}/assets/samples`);
    const sharedJson = JSON.parse(fs.readFileSync(path.join(jsonSamplesPath, "/shared.json")));
    const submoduleAppDest = submodule + `/${dest}/`;
    if (!fs.existsSync(submoduleAppDest)) {
        fs.mkdirSync(submoduleAppDest);
    }

    let i = 0;
    return gulp.src([`${jsonSamplesPath}/*.json`, `!${jsonSamplesPath}/shared.json`, `!${jsonSamplesPath}/meta.json`])
        .pipe(es.map((file, cb) => {
            fs.readFile(file.path, 'utf-8', (err, content) => {
                // Adjust sample application bundle files
                const jsonObj = JSON.parse(content);
                const additionals = [];
                const packageJson =
                {
                    "path": "package.json",
                    "hasRelativeAssetsUrls": false,
                    "content": JSON.stringify({
                        "dependencies": JSON.parse(jsonObj.sampleDependencies),
                        "devDependencies": sharedJson.devDependencies
                    }, null, 2)
                }
                additionals.push(packageJson);

                if (jsonObj.addTsConfig) {
                    additionals.push(sharedJson.tsConfig);
                }

                jsonObj.sampleFiles = jsonObj.sampleFiles.concat(sharedJson.files).concat(additionals);

                // Configure sample application file structure
                const fileName = file.path.substring(file.base.length + 1).replace(".json", "");
                let sampleBaseDir = fileName.indexOf("--") !== -1 ? fileName.substring(0, fileName.indexOf("--")) : "";
                if (sampleBaseDir && !fs.existsSync(submoduleAppDest + sampleBaseDir)) {
                    fs.mkdirSync(submoduleAppDest + sampleBaseDir);
                }
                const sampleName = sampleBaseDir ? getSampleNameFromFileName(fileName, sampleBaseDir) : fileName;
                const sampleAppPath = submoduleAppDest + sampleBaseDir + "/" + sampleName;

                if (!fs.existsSync(sampleAppPath)) {
                    fs.mkdirSync(sampleAppPath);
                }

                // Distribute Sample Files
                jsonObj.sampleFiles.forEach(sampleFile => {
                    let sampleContent;
                    const isProduction = argv.prod !== undefined && argv.prod.toLowerCase().trim() === "true";
                    const assetsUrl = `https://${isProduction ? "www." : "staging."}infragistics.com/${dest}/assets/`;
                    if (sampleFile.hasRelativeAssetsUrls) {
                        sampleContent = sampleFile.content.replace(assetsRegex, assetsUrl);
                    } else {
                        sampleContent = sampleFile.content;
                    }
                    const paths = sampleFile.path.replace("./", "").split("/");
                    let tempPath = "";
                    paths.forEach(p => {
                        tempPath += p + "/";
                        if (p.indexOf(".") !== -1) {
                            fs.writeFileSync(sampleAppPath + "/" + tempPath, sampleContent);
                        } else
                            if (!fs.existsSync(sampleAppPath + "/" + tempPath)) {
                                fs.mkdirSync(sampleAppPath + "/" + tempPath)
                            }
                    })
                });
                i++;
                console.log(`Processing ${fileName}.json with SCSS styling`);
                cb(null, file);
            })
        }))
        .on("error", () => console.log(err))
        .on("end", () => console.log(`Generated ${i} applications with SCSS in ${dest.toUpperCase()} project.`));
}

const processDemosWithScss = () => processApp("src", "angular-demos", "data");
const processDemosLobWithScss = () => processApp("projects/app-lob/src", "angular-demos-lob", "services");
const processDemosCrmWithScss = () => processApp("projects/app-crm/src", "angular-demos-grid-crm");

let repositoryfyAngularDemos;
let repositoryfyAngularDemosLob;
let repositoryfyAngularDemosCrm;

const copyGitHooks = async (cb) => {

    if (process.env.AZURE_PIPELINES || process.env.TRAVIS || process.env.CI || !fs.existsSync('.git')) {
        return;
    }

    const gitHooksDir = './.git/hooks/';
    const defaultCopyHookDir = gitHooksDir + 'scripts/';
    const dirs = [
        gitHooksDir,
        defaultCopyHookDir,
        defaultCopyHookDir + 'templates',
        defaultCopyHookDir + 'templateValidators',
        defaultCopyHookDir + 'utils'
    ];

    dirs.forEach((dir) => {
        if (!fs.existsSync(dir)) {
            fs.mkdir(dir, (err) => {
                if (err) {
                    throw err;
                }
            });
        }
    });

    const defaultHookDir = './.hooks/scripts/';

    fs.copyFileSync(defaultHookDir + 'templates/default.js',
        defaultCopyHookDir + 'templates/default.js');

    fs.copyFileSync(defaultHookDir + 'templateValidators/default-style-validator.js',
        defaultCopyHookDir + 'templateValidators/default-style-validator.js');

    fs.copyFileSync(defaultHookDir + 'utils/issue-validator.js',
        defaultCopyHookDir + 'utils/issue-validator.js');

    fs.copyFileSync(defaultHookDir + 'utils/line-limits.js',
        defaultCopyHookDir + 'utils/line-limits.js');

    fs.copyFileSync(defaultHookDir + 'common.js',
        defaultCopyHookDir + 'common.js');

    fs.copyFileSync(defaultHookDir + 'validate.js',
        defaultCopyHookDir + 'validate.js');

    fs.copyFileSync('./.hooks/prepare-commit-msg',
        './.git/hooks/prepare-commit-msg');

    return await cb();
};

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

const cleanupAngularDemosCrm = (cb) => {
    fsExtra.removeSync(submodule + "/angular-demos-grid-crm");
    fsExtra.mkdirSync(submodule + "/angular-demos-grid-crm");
    cb();
}

exports.repositoryfyAngularDemos = repositoryfyAngularDemos = gulp.series(cleanupAngularDemos, processDemosWithScss);
exports.repositoryfyAngularDemosLob = repositoryfyAngularDemosLob = gulp.series(cleanupAngularDemosLob, processDemosLobWithScss);
exports.repositoryfyAngularDemosCrm = repositoryfyAngularDemosCrm = gulp.series(cleanupAngularDemosCrm, processDemosCrmWithScss);
exports.copyGitHooks = copyGitHooks;
