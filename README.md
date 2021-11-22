[![Build Status](https://dev.azure.com/IgniteUI/igniteui-angular/_apis/build/status/IgniteUI.igniteui-angular-samples?branchName=master)](https://dev.azure.com/IgniteUI/igniteui-angular/_build/latest?definitionId=4&branchName=master)
[![Build Status](https://travis-ci.org/IgniteUI/igniteui-angular-samples.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-angular-samples)

# Ignite UI for Angular - Samples

This project is using Ignite UI for Angular components to demonstrate different scenarios related to the usage of each component. The project is tightly related to [Ignite UI DocFX Site Builder](https://github.com/IgniteUI/igniteui-docfx). All samples are part of the official component topics from our [website](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html).

The project is divided into two separate applications:


- A `default application`, which uses all the [igniteui-angular](https://travis-ci.org/IgniteUI/igniteui-angular) components to demonstrate sample applications

- A `Line of Business` application, complemented with UI and functionality from the **Ignite UI for Angular Charts** and **Ignite UI for Angular Excel library**.

## Setup
To setup the project run:

```
npm install
```

## Build

### Default App
To build the application project run:

```
npm run build
```

### Line of Business App
To build the application project run:
```
npm run build:app-lob
```

### These commands will produce an AOT build and [live editing](https://github.com/IgniteUI/igniteui-live-editing/blob/master/README.md) samples supporting both Sass and CSS.

## Dev Server

### Default App
To start the application dev server run:

```
npm run start
```

To start in modern browsers only, run:

```
npm run start:es6
```

### Line of Business App

To start the application dev server run:
```
npm run start:app-lob
```

### Starting from Angular v8 the project will not be supported/start in IE due to the new default compilation target es2015.

## Dev Server and Live Editing

### Default App

To generate the live editing applications along with the dev server run:
```
npm run start:live-editing
```

To start in modern browsers only, run:

```
npm run start:live-editing:es6
```


To generate live editing applications, using only **Sass** for styling run:
```
npm run start:live-editing:noCss
```

### Line of Business App

To generate the live editing applications along with the dev server run:
```
npm run start:app-lob:live-editing
```

To omit **CSS** styling in the live editing applications:
```
npm run start:app-lob:live-editing:noCss
```

## Live-Editing
All [live-editing capabilities](https://github.com/IgniteUI/igniteui-live-editing) are performed by the [ package](https://www.npmjs.com/package/igniteui-live-editing), that was previously part of the project.

Live-editing [documentation could be found here](https://github.com/IgniteUI/igniteui-live-editing#live-editing-documentation). If you are interested in how the engine works, read the [following section](https://github.com/IgniteUI/igniteui-live-editing#how-the-live-editing-engine-works).

One of the most important functionality is the Configurator Generator as each Ignite UI for Angular component has a separate configurations (config) generator - [read the following section if you are interested in the actual structure and how to configure it](https://github.com/IgniteUI/igniteui-live-editing#configuration-generator).
### Live-Editing Watcher
Use this command to start the server with capability to regenerate [live editing](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/live-editing/README.md) JSON files (e.g. `"/src/assets/samples/avatar-sample-3.json"`) when a change related to the samples is made:

```
npm run start:watch-live-editing
```

To start in modern browsers only, run:

```
npm run start:watch-live-editing:es6
```

### Generate Live-Editing JSON files
To generate only the [live editing](https://github.com/IgniteUI/igniteui-live-editing/blob/master/README.md) samples files (e.g. `"/src/assets/samples/avatar-sample-3.json"`) run:

#### Default App
With **CSS** styling generation
```
npm run generate-live-editing --css=true
```

Without **CSS** styling generation:
```
npm run generate-live-editing
```

#### Line of Business App
With **CSS** styling generation
```
npm run generate-live-editing --css=true --appDv=true
```

Without **CSS** styling generation:
```
npm run generate-live-editing --appDv=true
```

## Running with the DocFX project

In order to combine the execution of both [DocFX](https://github.com/IgniteUI/igniteui-docfx) and Ignite UI Angular Samples projects, use `npm run start`.
After starting both projects you will see the embed samples into the DocFX site builder, under `localhost:port` hostname.

## Running with custom [igniteui-angular](https://github.com/IgniteUI/igniteui-angular) build

In order to test a specific branch created in [igniteui-angular]((https://github.com/IgniteUI/igniteui-angular)) project with `igniteui-angular-samples` you have to follow these steps:

In **igniteui-angular** :
- build the source code with the version/branch you want to test: 
```
npm run build:lib
```
- copy the builded `igniteui-angular` folder, located in the `dist` directory

In **igniteui-angular-samples**:

- paste the copied `igniteui-angular` folder in the place of its corresponding folder in `node_modules` directory
