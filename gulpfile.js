const gulp = require("gulp");
const tsNode = require('ts-node').register({
    fast: true,
    ignore: [/\/node_modules\/(?!igniteui-angular)/],
    compilerOptions: {
        allowJs: true
    }
});

gulp.task("generate-live-editing", () => {
    requireFile("./live-editing/LiveEditingManager.ts");
});

gulp.task("watch-live-editing", ["generate-live-editing"], () => {
  gulp.watch(["./src/**/*.*", "!./src/assets/**", "./live-editing/**/*.*", "package.json"],
    ["generate-live-editing"]);
});

function requireFile(path) {
  delete require.cache[require.resolve(path)];
  return require(path);
}
