# Live Editing Documentation

This feature helps us to provide each sample as a separate application to external consumers.

## Configurations

The live editing engine converts each sample into a full-blown Angular application. This is done by using configurations. If you want to enable live editing on a sample, you should write such a configuration. Sample configuration:

```typescript
new Config({
    component: GridComponent,
    additionalFiles: ["/src/app/grid/services/data.service.ts", "/src/app/grid/services/data.ts"],
    appModuleConfig: new AppModuleConfig({
        imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxGridModule,
            GridComponent, DataService],
        ngDeclarations: [GridComponent],
        ngImports: [IgxAvatarModule, IgxBadgeModule, IgxGridModule,
            HttpClientModule],
        ngProviders: [DataService]
    }),
    shortenComponentPathBy: "/grid/"
});
```
### Config API

API description of the `Config` class, needed by the live editing engine to convert a sample into an application.

| Property | Type | Constraint | Description |
| --- | --- | --- | --- |
| component | Type&lt;any&gt; | required | The sample component. It should be located in a `.ts` file and should have a complimentary `.html` and `.scss` file. Each of the three files should follow this naming convention - `component-name/component-name.component.extension`.|
| appModuleConfig | AppModuleConfig | required | Description of the `app.module.ts` file. |
| additionalFiles | string[] | optional | Additional files, besides the three sample component files. Each path should start from `/src/`, for example `/src/app/grid/data.ts`. |
| dependenciesType | DependenciesType | optional | The set of dependencies you want your sample to load. The default type is `Default`. |
| additionalDependencies | string[] | optional | A list of additional dependencies. |
| shortenComponentPathBy | string | optional | Directory/directories to be shortened from the sample component path. |

### AppModuleConfig API

API description of the `AppModuleConfig` class, used in the `Config` class.

| Property | Type | Constraint | Description |
| --- | --- | --- | --- |
| imports | Array&lt;Type&lt;any&gt; &#124; any&gt; | required | TypeScript imports. For example the type `HttpClientModule` will result in `import { HttpClientModule } from "@angular/common/http";` |
| ngDeclarations | Array&lt;Type&lt;any&gt;&gt; | required | Angular declarations. Used in the `@NgModule` decorator. |
| ngImports | Array&lt;Type&lt;any&gt; &#124; ModuleWithProviders &#124; any&gt;| required | Angular imports. Used in the `@NgModule` decorator. |
| ngProviders | Provider[] | optional | Angular providers. Used in the `@NgModule` decorator. |

### DependenciesType API

API description of the `DependenciesType` enum, used in the `Config` class.

| Constant | Description |
| --- | --- |
| Default | Loads `igniteui-angular` package and its dependencies. |
| Charts | Loads `igniteui-angular-charts` package and its dependencies. |
| Gauges | Loads `igniteui-angular-gauges` package and its dependencies. |
| Excel | Loads `igniteui-angular-excel` package and its dependencies. |

### Configuration Generator

Each Ignite UI for Angular component has a separate configurations generator. If you need to create a new generator, please make sure you add it in the `ConfigGenerators.ts` in the `CONFIG_GENERATORS` array.

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
    component: GridComponent,
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

For each sample you have to request two files - `shared.json` and `sample.json` files. Both of the files are located in `/assets/samples/` folder. The naming of the sample's JSON file is the same as in the routing engine when requesting the sample - for a sample accessed by `sample-website/grid`, the JSON file will be named `grid.json`. If you have a lazily loaded module, use its path as a prefix. For example with a module with path `grid-module`, your `grid` sample file will be named `grid-module-grid.json`. After having both of the files, combine them and you will have all of the files required for a stand-alone Angular application.

### Meta file
`meta.json` consists of meta information. It holds `generationTimeStamp` which could be used for cache invalidation purposes.

### CSS Support

By default the live editing generates samples with Sass. CSS is also supported. The samples with CSS have the same structure and are located in `/assets/samples/css-support/` folder.
