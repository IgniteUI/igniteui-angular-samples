import * as ChartsRouting from "../../src/app/charts/charts-routing.module";
import { ChartsModule } from "../../src/app/charts/charts.module";
import * as DataDisplayRouting from "../../src/app/data-display/data-display-routing.module";
import { DataDisplayModule } from "../../src/app/data-display/data-display.module";
import * as DataEntriesRouting from "../../src/app/data-entries/data-entries-routing.module";
import { DataEntriesModule } from "../../src/app/data-entries/data-entries.module";
import * as ExcelLibraryRouting from "../../src/app/excel-library/excel-library-routing.module";
import { ExcelLibraryModule } from "../../src/app/excel-library/excel-library.module";
import * as GaugesRouting from "../../src/app/gauges/gauges-routing.module";
import { GaugesModule } from "../../src/app/gauges/gauges.module";
import * as GeoMapRoutingModule from "../../src/app/maps/geo-map-routing.module";
import { GeoMapSamplesModule } from "../../src/app/maps/geo-map-samples.module";
import * as GridCRMRouting from "../../src/app/grid-crm/grid-crm-routing.module";
import { GridCRMModule } from "../../src/app/grid-crm/grid-crm.module";
import * as GridFinjsRouting from "../../src/app/grid-finjs/grid-finjs-routing.module";
import { GridFinjsModule } from "../../src/app/grid-finjs/grid-finjs.module";
import * as GridRouting from "../../src/app/grid/grids-routing.module";
import { GridsModule } from "../../src/app/grid/grids.module";
import * as HierarchicalGridRouting from "../../src/app/hierarchical-grid/hierarchical-grid-routing.module";
import { HierarchicalGridModule } from "../../src/app/hierarchical-grid/hierarchical-grid.module";
import * as InteractionsRouting from "../../src/app/interactions/interactions-routing.module";
import { InteractionsModule } from "../../src/app/interactions/interactions.module";
import * as LayoutsRouting from "../../src/app/layouts/layouts-routing.module";
import { LayoutsModule } from "../../src/app/layouts/layouts.module";
import * as ListsRouting from "../../src/app/lists/lists-routing.module";
import { ListsModule } from "../../src/app/lists/lists.module";
import * as MenusRouting from "../../src/app/menus/menus-routing.module";
import { MenusModule } from "../../src/app/menus/menus.module";
import * as NotificationsRouting from "../../src/app/notifications/notifications-routing.module";
import { NotificationsModule } from "../../src/app/notifications/notifications.module";
import * as SchedulingRouting from "../../src/app/scheduling/scheduling-routing.module";
import { SchedulingModule } from "../../src/app/scheduling/scheduling.module";
import * as ServicesRouting from "../../src/app/services/services-routing.module";
import { ServicesModule } from "../../src/app/services/services.module";
import * as ThemingRouting from "../../src/app/theming/theming-routing.module";
import { ThemingModule } from "../../src/app/theming/theming.module";
import * as TreeGridRouting from "../../src/app/tree-grid/tree-grid-routing.module";
import { TreeGridModule } from "../../src/app/tree-grid/tree-grid.module";
import * as TreeGridFinjsRouting from "../../src/app/treegrid-finjs/treegrid-finjs-routing.module";
import { TreeGridFinjsModule } from "../../src/app/treegrid-finjs/treegrid-finjs.module";

export const MODULE_ROUTES = [
    {
        module: NotificationsModule,
        routes: NotificationsRouting.notificationsRoutes
    },
    {
        module: DataDisplayModule,
        routes: DataDisplayRouting.dataDisplayRoutes
    },
    {
        module: ChartsModule,
        routes: ChartsRouting.chartsRoutes
    },
    {
        module: DataEntriesModule,
        routes: DataEntriesRouting.dataEntriesRoutes
    },
    {
        module: ThemingModule,
        routes: ThemingRouting.themingRoutes
    },
    {
        module: MenusModule,
        routes: MenusRouting.menusRoutes
    },
    {
        module: SchedulingModule,
        routes: SchedulingRouting.schedulingRoutes
    },
    {
        module: GaugesModule,
        routes: GaugesRouting.gaugesRoutes
    },
    {
        module: GeoMapSamplesModule,
        routes: GeoMapRoutingModule.routes
    },
    {
        module: ListsModule,
        routes: ListsRouting.listsRoutes
    },
    {
        module: InteractionsModule,
        routes: InteractionsRouting.interactionsRoutes
    },
    {
        module: ExcelLibraryModule,
        routes: ExcelLibraryRouting.excelLibraryRoutes
    },
    {
        module: LayoutsModule,
        routes: LayoutsRouting.layoutsRoutes
    },
    {
        module: TreeGridModule,
        routes: TreeGridRouting.treeGridRoutes
    },
    {
        module: GridsModule,
        routes: GridRouting.gridsRoutes
    },
    {
        module: HierarchicalGridModule,
        routes: HierarchicalGridRouting.hierarchicalGridRoutes
    },
    {
        module: GridCRMModule,
        routes: GridCRMRouting.gridcrmRoutes
    },
    {
        module: ServicesModule,
        routes: ServicesRouting.servicesRoutes
    },
    {
        module: GridFinjsModule,
        routes: GridFinjsRouting.gridfinjsRoutes
    },
    {
        module: TreeGridFinjsModule,
        routes: TreeGridFinjsRouting.treegridfinjsRoutes
    }
];
