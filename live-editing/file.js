module.exports = (function () {
  var assetsRegExp = new RegExp("assets/");

  function LiveEditingFile(path, content) {
    this.path = path;
    this.content = content;
    this.hasRelativeAssetsUrls = false;
    if (assetsRegExp.test(content)) {
      this.hasRelativeAssetsUrls = true;
    }
  }

  return {
    LiveEditingFile: LiveEditingFile
  }
}());
