[![Build Status](https://travis-ci.org/IgniteUI/igniteui-angular-samples.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-angular-samples)

# Ignite UI for Angular - Samples

This project is using Ignite UI for Angular components to demonstrate different scenarios related to the usage of each component. The project is tightly related to [Ignite UI DocFX Site Builder](https://github.com/IgniteUI/igniteui-docfx). All samples are part of the official component topics from our [website](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html).

## Setup
To setup the project run:

```
npm install
```

## Build
To build the project run:

```
npm run build
```

This will produce an AOT build and [live editing](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/live-editing/README.md) samples supporting both Sass and CSS.

## Dev Server
To start the dev server run:

```
npm run start
```

## Live Editing Watcher
Use this command to start the server with capability to regenerate [live editing](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/live-editing/README.md) JSON files (e.g. `"/src/assets/samples/avatar-sample-3.json"`) when a change related to the samples is made:

```
npm run start:watch-live-editing
```

## Generate Live Editing JSON files
To generate only the [live editing](https://github.com/IgniteUI/igniteui-angular-samples/blob/master/live-editing/README.md) samples files (e.g. `"/src/assets/samples/avatar-sample-3.json"`) run:
```
npm run generate-live-editing
```

## Running with the DocFX project

In order to combine the execution of both [DocFX](https://github.com/IgniteUI/igniteui-docfx) and Ignite UI Angular Samples projects, use `npm run start`.
After starting both projects you will see the embed samples into the DocFX site builder, under `localhost:port` hostname.
