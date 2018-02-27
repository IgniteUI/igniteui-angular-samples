module.exports = (function () {
  var fs = require("fs");
  var path = require("path");

  var basePath = path.join(__dirname, "../src/app/");
  var assetsSamplesDir = path.join(__dirname, "../src/assets/samples/");
  var componentFilesExtensions = ["ts", "html", "scss"];
  var appModuleTemplatePath = path.join(__dirname, "/templates/app.module.ts.template");
  var appModulePath = path.join(__dirname, "../src/app/app.module.ts");

  var LiveEditingFile = require(path.join(__dirname, "file.js")).LiveEditingFile;

  var init = function () {
    if (!fs.existsSync(assetsSamplesDir)) {
      fs.mkdirSync(assetsSamplesDir);
    }
  }

  var generateSamplesJson = function (samplesConfig) {
    for (var i = 0; i < samplesConfig.length; i++) {
      generateSampleJson(samplesConfig[i]);
    }
  }

  // Creates JSON containing all the files based on the sample configuration.
  var generateSampleJson = function (sampleConfig) {
    var sampleFiles = [];
    var componentTsContent;
    var componentFilesPaths = getComponentFilesPaths(sampleConfig.componentPath);
    var shortenComponentPathExceptions = getShortenComponentPathExceptions(sampleConfig);

    for (var i = 0; i < componentFilesPaths.length; i++) {
      var filePath = path.join(basePath, componentFilesPaths[i]);
      var fileContent = fs.readFileSync(filePath, "utf8");
      var file = new LiveEditingFile("app" + componentFilesPaths[i], fileContent);
      sampleFiles.push(shortenComponentPath(sampleConfig, file, filePath, shortenComponentPathExceptions));
      if (componentFilesPaths[i].indexOf(".ts") !== -1) {
        componentTsContent = fileContent;
      }
    }

    if (sampleConfig.additionalFiles) {
      for (var i = 0; i < sampleConfig.additionalFiles.length; i++) {
        var filePath = path.join(basePath, sampleConfig.additionalFiles[i]);
        var fileContent = fs.readFileSync(filePath, "utf8");
        var file = new LiveEditingFile("app" + sampleConfig.additionalFiles[i], fileContent);
        sampleFiles.push(shortenComponentPath(sampleConfig, file, filePath, shortenComponentPathExceptions));
      }
    }

    var appModuleFile = new LiveEditingFile("app/app.module.ts", getAppModuleConfig(sampleConfig));
    sampleFiles.push(shortenComponentPath(sampleConfig, appModuleFile, appModulePath, shortenComponentPathExceptions));
    sampleFiles.push(new LiveEditingFile("app/app.component.html", getAppComponentHtml(componentTsContent)));

    fs.writeFileSync(assetsSamplesDir + sampleConfig.componentRoutePath + ".json", JSON.stringify(sampleFiles));
  }

  var getAppComponentHtml = function (componentTsContent) {
    var componentSelectorRegex = /selector:[\s]*["']([a-zA-Z0-9-]+)["']/g;
    var componentSeletcor = componentSelectorRegex.exec(componentTsContent)[1];
    var appComponentHtml = "<" + componentSeletcor + "></" + componentSeletcor + ">";
    return appComponentHtml;
  }

  var getAppModuleConfig = function (sampleConfig) {
    var appModuleTemplate = fs.readFileSync(appModuleTemplatePath, "utf8");

    var imports = "";
    for (var i = 0; i < sampleConfig.appModuleConfig.imports.length; i++) {
      var appModuleImport = '\r\nimport { ' +
        formatAppModuleTypes(sampleConfig.appModuleConfig.imports[i].import.split(","), false, 1, "\r\n") +
        ' } from "' + sampleConfig.appModuleConfig.imports[i].from + '";';
      imports = imports + appModuleImport;
    }

    var ngDeclarations = "," + formatAppModuleTypes(sampleConfig.appModuleConfig.ngDeclarations.split(','), true, 2);
    var ngImports = "," + formatAppModuleTypes(sampleConfig.appModuleConfig.ngImports.split(","), true, 2);

    var ngProviders = "";
    if (sampleConfig.appModuleConfig.ngProviders) {
      ngProviders = formatAppModuleTypes(sampleConfig.appModuleConfig.ngProviders.split(","), false, 2, "\r\n\t");
    }

    appModuleTemplate = appModuleTemplate
      .replace("{imports}", imports)
      .replace("{ngDeclarations}", ngDeclarations)
      .replace("{ngImports}", ngImports)
      .replace("{ngProviders}", ngProviders);

    return appModuleTemplate;
  }

  var formatAppModuleTypes = function (types, multiline, tabsCount, suffixIfMultiple) {
    if (types.length === 1 && !multiline) {
      return types.join("");
    }

    var formattedTypes = "\r\n";
    var tabs = "";
    for (var i = 0; i < tabsCount; i++) {
      tabs = tabs + "\t";
    }

    for (var i = 0; i < types.length; i++) {
      formattedTypes = formattedTypes + tabs + types[i].trim();
      if (i < types.length - 1) {
        formattedTypes = formattedTypes + ",\r\n";
      }
    }

    if (suffixIfMultiple) {
      formattedTypes = formattedTypes + suffixIfMultiple;
    }

    return formattedTypes;
  }

  // used for gulp.watch purposes
  var getSamplesDependencies = function () {
    var samplesDependencies = {};

    samplesDependencies[appModuleTemplatePath] = true;

    return samplesDependencies;
  }

  // Generate the three file names:
  // - /componentPath/componentName.component.ts
  // - /componentPath/componentName.component.html
  // - /componentPath/componentName.component.css
  var getComponentFilesPaths = function (componentPath) {
    var filePaths = [];
    var componentPathWithoutTrailingSlash = componentPath.substring(0, componentPath.length - 1);
    var componentName = componentPathWithoutTrailingSlash.substring(
      componentPathWithoutTrailingSlash.lastIndexOf("/") + 1, componentPathWithoutTrailingSlash.length);

    for (var i = 0; i < componentFilesExtensions.length; i++) {
      var filePath = componentPath + componentName + ".component." + componentFilesExtensions[i];
      filePaths.push(filePath);
    }

    return filePaths;
  }

  var getShortenComponentPathExceptions = function (sampleConfig) {
    var exceptions = {};

    if (sampleConfig.shortenComponentPathByExcludeFiles &&
      sampleConfig.shortenComponentPathByExcludeFiles.length > 0) {
      for (var i = 0; i < sampleConfig.shortenComponentPathByExcludeFiles.length; i++) {
        var filePath = path.join(basePath, sampleConfig.shortenComponentPathByExcludeFiles[i]);
        exceptions[filePath] = true;
      }
    }

    return exceptions;
  }

  var shortenComponentPath = function (sampleConfig, file, fileFullPath, shortenExceptions) {
    if (!sampleConfig.shortenComponentPathBy) {
      return file;
    }

    var shorteningRegex = new RegExp(sampleConfig.shortenComponentPathBy, "g");
    file.path = file.path.replace(shorteningRegex, "/");

    if (shortenExceptions[fileFullPath] || fileFullPath.split('.').pop() !== "ts") {
      return file;
    }

    file.content = file.content.replace(shorteningRegex, "/");
    return file;
  }

  return {
    init: init,
    generateSampleJson: generateSampleJson,
    generateSamplesJson: generateSamplesJson,
    getSamplesDependencies: getSamplesDependencies
  }
}());
