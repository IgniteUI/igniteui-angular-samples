// tslint:disable:prefer-const
// tslint:disable:object-literal-shorthand
// tslint:disable:only-arrow-functions
// tslint:disable:member-ordering
import * as autoprefixer from "autoprefixer";
import * as fs from "fs";
import * as nodeSass from "node-sass";
import * as path from "path";
import * as postcss from "postcss";
import * as sassJs from "sass.js";

const IGNITE_IMPORTS_REG_EXP = new RegExp(/(@import\s+['"])(~)(igniteui-angular)/g);
const IGNITE_IMPORT_REG_EXP = new RegExp(/(~)(igniteui-angular)/g);
const NODE_SASS_PATHS = ["src/app/theming/theme-chooser/", "src/app/theming/styles" ];

export class SassCompiler {
    public compile(sass: string): string {
        sass = sass.replace(IGNITE_IMPORTS_REG_EXP, "$1./node_modules/$3");
        if (sass.trim() === "") {
            return "";
        }

        const renderedSassResult = nodeSass.renderSync({
            data: sass,
            importer: function(url, prev, done) {
                let fileUrl = url.replace(IGNITE_IMPORT_REG_EXP, "./node_modules/$2");
                return {file: fileUrl};
            },
            includePaths: NODE_SASS_PATHS
        });

        return postcss([autoprefixer({browsers: ["last 5 versions", "> 3%"], grid: true})])
              .process(renderedSassResult.css).css;
    }

    public compileWithSassJs(sass: string, shouldLogStatus: boolean = false): Promise<string> {
        SassCompiler._initSassJsImporter(shouldLogStatus);

        return new Promise((resolve, reject) => {
            sassJs.compile(sass, (result) => {
                if (result.status !== 0) {
                    reject(result.formatted);
                }

                resolve(result);
            });
        });
    }

    private static _initSassJsImporter(shouldLogStatus: boolean) {
        sassJs.importer(function(request, done) {
            let basePath = path.join(__dirname, "../../");
            if (request.current.indexOf("~igniteui-angular") !== -1) {
                let fullImportPath = request.current.replace("~", "node_modules/");
                let importFilePath = path.join(basePath, fullImportPath);
                importFilePath = SassCompiler._convertSassImportToFilePath(importFilePath);
                let importFileContent = fs.readFileSync(importFilePath, "utf8");
                if (shouldLogStatus) {
                    console.log("Compiling " + importFilePath);
                }

                done({
                    content: importFileContent,
                    path: importFilePath
                });
            } else if (request.previous) {
                let importFilePath = SassCompiler._getFilePathFromImport(request.current, request.previous);
                let importFileContent = fs.readFileSync(importFilePath, "utf8");
                if (shouldLogStatus) {
                    console.log("Compiling " + importFilePath);
                }

                done({
                    content: importFileContent,
                    path: importFilePath
                });
            } else {
                done();
            }
        });
    }

    private static _getFilePathFromImport(importFrom: string, currentFilePath: string): string {
        let lastSlashIndex = currentFilePath.lastIndexOf("\\");
        let currentFolderPath = currentFilePath.substring(0, lastSlashIndex + 1);
        let importFilePath = path.join(currentFolderPath, importFrom);
        return SassCompiler._convertSassImportToFilePath(importFilePath);
    }

    private static _convertSassImportToFilePath(filePath: string): string {
        let lastSlashIndex = filePath.lastIndexOf("\\");
        let folderPath = filePath.substring(0, lastSlashIndex + 1);
        let fileName = filePath.substring(lastSlashIndex + 1, filePath.length);
        fileName = "_" + fileName + ".scss";
        filePath = path.join(folderPath, fileName);
        return filePath;
    }
}
