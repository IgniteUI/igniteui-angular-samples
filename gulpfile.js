const gulp = require("gulp");

gulp.task("generate-live-editing-shared", () => {
  var sharedHandler = requireFile("./live-editing/shared-asset.handler.js");
  sharedHandler.init();
  sharedHandler.generateSharedFile();
});

gulp.task("generate-live-editing-samples", () => {
  var samplesConfig = requireFile("./live-editing/samples.conf.js").samplesAssetsConfig;
  var samplesHandler = requireFile("./live-editing/sample-asset.handler.js");
  samplesHandler.init();
  samplesHandler.generateSamplesJson(samplesConfig);
});

gulp.task("generate-live-editing", ["generate-live-editing-shared", "generate-live-editing-samples"]);

gulp.task("watch-live-editing", ["generate-live-editing"], () => {
  gulp.watch(["./src/**/*.*", "!./src/assets/**", "./live-editing/**/*.*", "package.json"],
    ["generate-live-editing"]);
});

function requireFile(path) {
  delete require.cache[require.resolve(path)];
  return require(path);
}
