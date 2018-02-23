module.exports = (function () {
  var fs = require("fs");
  var path = require("path");

  var packagesConfigPath = path.join(__dirname, "../package.json");
  var indexFilePath = path.join(__dirname, "../src/index.html");
  var polyfillsFilePath = path.join(__dirname, "../src/polyfills.ts");
  var stylesFilePath = path.join(__dirname, "../src/styles.scss");
  var angularCliTemplatePath = path.join(__dirname, "../live-editing/templates/angular-cli.json.template");
  var mainTsFilePath = path.join(__dirname, "../live-editing/templates/main.ts.template");
  var appComponentCssPath = path.join(__dirname, "../src/app/app.component.css");
  var appComponentTsPath = path.join(__dirname, "../src/app/app.component.ts");

  var assetsSamplesDir = path.join(__dirname, "../src/assets/samples/");
  var igniteUIAngularPackageName = "igniteui-angular";

  var samplesPackageDependencies = [
    "@angular/animations",
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/forms",
    "@angular/http",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/router",
    "@types/hammerjs",
    "classlist.js",
    "core-js",
    "hammerjs",
    "igniteui-angular",
    "intl",
    "rxjs",
    "web-animations-js",
    "zone.js"
  ];

  var LiveEditingFile = require(path.join(__dirname, "file.js")).LiveEditingFile;

  var init = function () {
    if (!fs.existsSync(assetsSamplesDir)) {
      fs.mkdirSync(assetsSamplesDir);
    }
  }

  // used for gulp.watch purposes
  var getSharedFileDependencies = function () {
    var dependencies = {};

    dependencies[packagesConfigPath] = true;
    dependencies[indexFilePath] = true;
    dependencies[polyfillsFilePath] = true;
    dependencies[stylesFilePath] = true;
    dependencies[angularCliTemplatePath] = true;
    dependencies[mainTsFilePath] = true;
    dependencies[appComponentCssPath] = true;
    dependencies[appComponentTsPath] = true;

    return dependencies;
  }

  var generateSharedFile = function () {
    var packageFile = JSON.parse(fs.readFileSync(packagesConfigPath, "utf8"));
    var files = [];

    files.push(new LiveEditingFile("index.html", fs.readFileSync(indexFilePath, "utf8")));
    files.push(new LiveEditingFile("polyfills.ts", fs.readFileSync(polyfillsFilePath, "utf8")));
    files.push(new LiveEditingFile("styles.scss", fs.readFileSync(stylesFilePath, "utf8")));
    files.push(new LiveEditingFile(".angular-cli.json", fs.readFileSync(angularCliTemplatePath, "utf8")));
    files.push(new LiveEditingFile("main.ts", fs.readFileSync(mainTsFilePath, "utf8")));
    files.push(new LiveEditingFile("app/app.component.css", fs.readFileSync(appComponentCssPath, "utf8")));
    files.push(new LiveEditingFile("app/app.component.ts", fs.readFileSync(appComponentTsPath, "utf8")));

    var sharedFile = {
      "dependencies": JSON.stringify(getSamplesPackageDependencies(packageFile.dependencies)),
      "files": files
    };

    fs.writeFileSync(assetsSamplesDir + "/shared.json", JSON.stringify(sharedFile));
  }

  var getSamplesPackageDependencies = function (packageFileDependencies) {
    var dependenciesNeeded = {};

    for (var i = 0; i < samplesPackageDependencies.length; i++) {
      dependenciesNeeded[samplesPackageDependencies[i]] = true;
    }

    for (var key in packageFileDependencies) {
      if (!dependenciesNeeded[key]) {
        delete packageFileDependencies[key];
      }
    }

    return packageFileDependencies;
  }

  return {
    init: init,
    generateSharedFile: generateSharedFile,
    getSharedFileDependencies: getSharedFileDependencies
  }
}());
