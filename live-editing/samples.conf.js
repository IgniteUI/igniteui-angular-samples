/*
    This configuration helps to create a JSON file in the assets folder for each sample. Each JSON file contains the
    source code of each file used by the sample. These files are used for live sample editing or 
    whenever you'll need a sample's code in a human-readable form.

    Properties:
    - componentPath (string, required) - where the sample component is located in src/app/ directory.
          Gets the following three files from the path specified:
          %path%.component.css, %path%.component.html, %path%.component.ts.
    - componentRoutePath (string, required) - the route path of the component
    - additionalFiles (array, optional) - file paths to additional files the sample depends on
    - appModuleConfig (array, required) - the app module configuration for the sample
      - imports (array, required) - an array of imports with the following syntax: { "import": "", "from": "" }
      - ngDeclarations (string, required) - all NgModule declarations, separated by commas
      - ngImports (string, required) - all NgModule imports, separated by commas
      - ngProviders (string, optional) - all NgModule providers, separated by commas
    - shortenComponentPathBy (string, optional) - directory/directories to be removed from component path.
          This could be used when we have a lot of nested directories e.g. "/src/app/list/list-sample-1" and
          "/list/" path component could be omitted.
    - shortenComponentPathByExcludeFiles (array, optional) - files which content should be omitted when shortening
          component path by directory/directories.
*/

module.exports = {
  samplesAssetsConfig: [
    //{
    //  componentPath: "/avatar/",
    //  componentRoutePath: "avatar",
    //  appModuleConfig: {
    //    imports: [
    //      { import: "IgxAvatarModule", from: "igniteui-angular/main" },
    //      { import: "AvatarComponent", from: "./avatar/avatar.component" }],
    //    ngDeclarations: "AvatarComponent",
    //    ngImports: "IgxAvatarModule"
    //  }
    //},
    {
      componentPath: "/list/list-sample-2/",
      componentRoutePath: "list-sample-2",
      appModuleConfig: {
        imports: [
          { import: "IgxListModule", from: "igniteui-angular/main" },
          { import: "ListSample2Component", from: "./list/list-sample-2/list-sample-2.component" }],
        ngDeclarations: "ListSample2Component",
        ngImports: "IgxListModule"
      },
      shortenComponentPathBy: "/list/"
    },
    {
      componentPath: "/grid/",
      componentRoutePath: "grid",
      additionalFiles: ["/grid/services/data.service.ts", "/grid/services/data.ts"],
      appModuleConfig: {
        imports: [
          { import: "HttpClientModule", from: "@angular/common/http" },
          { import: "IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule, IgxIconModule, IgxInput, IgxProgressBarModule, IgxRippleModule, IgxSwitchModule", from: "igniteui-angular/main" },
          { import: "GridComponent", from: "./grid/grid.component" },
          { import: "DataService", from: "./grid/services/data.service" }],
        ngDeclarations: "GridComponent",
        ngImports: "IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule.forRoot(), IgxIconModule, IgxInput, IgxProgressBarModule, IgxRippleModule, IgxSwitchModule, HttpClientModule",
        ngProviders: "DataService"
      }
    }
  ]
}
