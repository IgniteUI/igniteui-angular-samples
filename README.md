[![Build Status](https://travis-ci.org/IgniteUI/igniteui-angular-samples.svg?branch=master)](https://travis-ci.org/IgniteUI/igniteui-angular-samples)

# Ignite UI for Angular - Samples

This project is using Ignite UI for Angular components to demonstrate different scenarios related to the usage of each component. The project is tightly related to [Ignite UI DocFX Site Builder](https://github.com/IgniteUI/igniteui-docfx). All samples are part of the official component topics from our [website](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid.html).

## Starting the Development Server

To start the server, run `npm run start`. Other options, for different types of execution:
-   `npm run start:watch-live-editing` - Use this command to start the server with capability to edit the `live-editing` configs and regenerate them on edit (e.g. `"../assets/samples/avatar-sample-3.json"`).
This will help to regenerate the JSON files located under assets (e.g. `"../assets/samples/avatar-sample-3.json"`).

-   `npm run generate-live-editing` - By using this command only the JSON files will be auto-generated, without the whole project. This will cover the cases when there is a change in the configuration or by adding a new one.
If config definition is deleted, it won't regenerate the JSON files (e.g. `"../assets/samples/avatar-sample-3.json"`).

In order to combine the execution of both DocFX and Ignite UI Angular Samples projects, use `npm run start`.
After starting both projects you will see the embed samples into the DocFX site builder, under `localhost:port` hostname.
