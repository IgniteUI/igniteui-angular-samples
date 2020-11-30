# Live Editing Documentation

This feature helps us to provide each sample as a separate application to external consumers.

## Configurations

The live editing engine converts each sample into a full-blown Angular application. This is done by using configurations. If you want to enable live editing on a sample, you should write such a configuration. Sample configuration:

```typescript
new Config({
        component: 'GridComponent',
        additionalFiles: ["/src/app/directives/prevent-scroll.directive.ts", "/src/app/grid/services/data.ts"],
        additionalDependencies: ["igniteui-angular-charts", "igniteui-angular-core"],
        appModuleConfig: new AppModuleConfig({
            imports: ['IgxPreventDocumentScrollModule', 'HttpClientModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule',
                'IgxGridModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule',
                'IgxRippleModule', 'IgxSwitchModule', 'GridComponent',
                'IgxSparklineCoreModule', 'IgxSparklineModule'],
            ngDeclarations: ['GridComponent'],
            ngImports: ['IgxPreventDocumentScrollModule', 'IgxAvatarModule', 'IgxBadgeModule', 'IgxButtonModule', 'IgxGridModule',
                'IgxIconModule', 'IgxInputGroupModule', 'IgxProgressBarModule', 'IgxRippleModule',
                'IgxSwitchModule', 'HttpClientModule', 'IgxSparklineCoreModule', 'IgxSparklineModule']
        })
    });
```
### Config API

API description of the `Config` class, needed by the live editing engine to convert a sample into an application.

| Property | Type | Constraint | Description |
| --- | --- | --- | --- |
| component | string | required | The name of the sample component class. The sample component should be located in a `.ts` file and should have a complimentary `.html` and `.scss` file. Each of the three files should follow this naming convention - `component-name/component-name.component.extension`. The sample component must not be imported in the file, where the config is declared. |
| appModuleConfig | AppModuleConfig | required | Description of the `app.module.ts` file. |
| additionalFiles | string[] | optional | Additional files, besides the three sample component files. Each path should start from `/src/`, for example `/src/app/grid/data.ts`. |
| dependenciesType | DependenciesType | optional | The set of dependencies you want your sample to load. The default type is `Default`. |
| additionalDependencies | string[] | optional | A list of additional dependencies. |
| shortenComponentPathBy | string | optional | Directory/directories to be shortened from the sample component path. |

### AppModuleConfig API

API description of the `AppModuleConfig` class, used in the `Config` class.

| Property | Type | Constraint | Description |
| --- | --- | --- | --- |
| imports | string[] | required | TypeScript imports. For example the string `'HttpClientModule'` will result in `import { HttpClientModule } from "@angular/common/http";` |
| ngDeclarations | string[] | required | Angular declarations. Used in the `@NgModule` decorator. |
| ngImports | string[] | required | Angular imports. Used in the `@NgModule` decorator. |
| ngProviders | string[] | optional | Angular providers. Used in the `@NgModule` decorator. |

### DependenciesType API

API description of the `DependenciesType` enum, used in the `Config` class.

| Constant | Description |
| --- | --- |
| Default | Loads `igniteui-angular` package and its dependencies. |
| Charts | Loads `igniteui-angular-charts` package and its dependencies. |
| Gauges | Loads `igniteui-angular-gauges` package and its dependencies. |
| Excel | Loads `igniteui-angular-excel` package and its dependencies. |


### Configuration Generator

Each Ignite UI for Angular component has a separate configurations (config) generator. Every config generator must implement the `IConfigGenerator` interface. If you need to create a new generator, please make sure you add it in the `ConfigGenerators.ts` in the `CONFIG_GENERATORS` array.

> The classes, declared by a third party library and used by the configs, must be imported in the file.

> Locally declared classes, which are used by the configs and are not sample components, must be added to the `additionalImports` object property of the config generator class with their class names as the keys and their relative paths to the config generator file location as the values.

> Sample components must not be imported in the file.

### IConfigGenerator API

| Property | Class Member Type |Type | Constraint | Description |
| --- | --- | --- | --- | --- |
| generateConfigs | method | Config[] | required | A method which returns the configs for the config generator class. |
| additionalImports | property | { [className: string]: path } | optional | Additional no third party classes (not from node_modules packages) with their relative paths that are used by the configs. |

```typescript
...
export class GridConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        RemoteValuesService: '../../src/app/grid/grid-excel-style-filtering-load-on-demand/remoteValues.service',
        PlanetComponent: '../../src/app/grid/grid-row-drag/planet/planet.component',
        ...
};

    public generateConfigs(): Config[] {
        ...
    }
...
``` 


## How The Live Editing Engine Works

### Shared File

The engine creates a `shared.json` file which holds all of the common files path and content, used in every sample application. These files are:
* index.html
* polyfills.ts
* styles.scss
* .angular-cli.json
* main.ts
* app/app.component.scss
* app/app.component.ts

It also contains a list of the `package.json` dependencies.

### Sample File

Per each sample the engine uses its configuration and assembles a set of files, needed for the stand-alone application. Take a look at the following configuration:

```typescript
new Config({
    component: 'GridComponent',
    additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"]
    ...
});
```

The engine will create a `grid.json` file describing the path and content of the following files:
* app/grid/grid.component.ts
* app/grid/grid.component.html
* app/grid/grid.component.scss
* app/grid/services/data.service.ts
* app/grid/services/data.ts
* app/app.module.ts
* app/app.component.html

### Assets
Assets like images are not part of the live editing applications and will be accessed directly from our servers. All of the assets URLs should be relative, for example - `assets/images/avatar/joe.jpg`. When parsed by the live editing engine, the links are replaced with absolute URLs, e.g. `https://www.infragistics.com/igniteui-angular-samples/assets/images/avatar/joe.jpg`.

### Consuming Live Editing JSON files

For each sample you have to request two files - `shared.json` and `sample.json` files. Both of the files are located in `/assets/samples/` folder. The naming of the sample's JSON file is the same as in the routing engine when requesting the sample - for a sample accessed by `sample-website/grid`, the JSON file will be named `grid.json`. If you have a lazily loaded module, use its path with a `--` suffix as a prefix. For example with a module with path `grid-module`, your `grid` sample file will be named `grid-module--grid.json`. After having both of the files, combine them and you will have all of the files required for a stand-alone Angular application.

### Meta file
`meta.json` consists of meta information. It holds `generationTimeStamp` which could be used for cache invalidation purposes.

### CSS Support

CSS style is no longer supported for the Live Editing generation.
