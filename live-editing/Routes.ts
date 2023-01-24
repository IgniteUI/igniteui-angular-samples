
import * as GridFinjsRouting from '../projects/app-lob/src/app/grid-finjs/grid-finjs-routing.module';
import { GridFinjsModule } from '../projects/app-lob/src/app/grid-finjs/grid-finjs.module';
import * as TreeGridFinjsRouting from '../projects/app-lob/src/app/treegrid-finjs/treegrid-finjs-routing.module';
import { TreeGridFinjsModule } from '../projects/app-lob/src/app/treegrid-finjs/treegrid-finjs.module';
import * as GridCRMRouting from '../projects/app-crm/src/app/app-routing.module';

import * as GridsDVRouting from '../projects/app-lob/src/app/grid/grids-routing.module';
import { GridsDVModule } from '../projects/app-lob/src/app/grid/grids.module';
// tslint:disable-next-line: max-line-length
import * as HieararchicalGridsDVRouting from '../projects/app-lob/src/app/hierarchical-grid/hierarchical-grid-routing.module';
import { HierarchicalGridDVModule } from '../projects/app-lob/src/app/hierarchical-grid/hierarchical-grid.module';
import * as TreeGridDvRoutingModule from '../projects/app-lob/src/app/tree-grid/tree-grid-routing.module';
import { TreeGridDVModule } from '../projects/app-lob/src/app/tree-grid/tree-grid.module';

import * as DataDisplayRouting from '../src/app/data-display/data-display-routing.module';
import { DataDisplayModule } from '../src/app/data-display/data-display.module';
import * as DataEntriesRouting from '../src/app/data-entries/data-entries-routing.module';
import { DataEntriesModule } from '../src/app/data-entries/data-entries.module';
import * as GridRouting from '../src/app/grid/grids-routing.module';
import * as PivotGridRouting from '../src/app/pivot-grid/pivot-grids-routing.module';
import { GridsModule } from '../src/app/grid/grids.module';
import * as HierarchicalGridRouting from '../src/app/hierarchical-grid/hierarchical-grid-routing.module';
import { HierarchicalGridModule } from '../src/app/hierarchical-grid/hierarchical-grid.module';
import * as InteractionsRouting from '../src/app/interactions/interactions-routing.module';
import { InteractionsModule } from '../src/app/interactions/interactions.module';
import * as LayoutsRouting from '../src/app/layouts/layouts-routing.module';
import { LayoutsModule } from '../src/app/layouts/layouts.module';
import * as ListsRouting from '../src/app/lists/lists-routing.module';
import { ListsModule } from '../src/app/lists/lists.module';
import * as MenusRouting from '../src/app/menus/menus-routing.module';
import { MenusModule } from '../src/app/menus/menus.module';
import * as NotificationsRouting from '../src/app/notifications/notifications-routing.module';
import { NotificationsModule } from '../src/app/notifications/notifications.module';
import * as SchedulingRouting from '../src/app/scheduling/scheduling-routing.module';
import { SchedulingModule } from '../src/app/scheduling/scheduling.module';
import * as ServicesRouting from '../src/app/services/services-routing.module';
import { ServicesModule } from '../src/app/services/services.module';
import * as ThemingRouting from '../src/app/theming/theming-routing.module';
import { ThemingModule } from '../src/app/theming/theming.module';
import * as TreeGridRouting from '../src/app/tree-grid/tree-grid-routing.module';
import { TreeGridModule } from '../src/app/tree-grid/tree-grid.module';
// eslint-disable-next-line max-len
import * as GridFinJSDockManagerRoutingModule from '../projects/app-lob/src/app/grid-finjs-dock-manager/grid-finjs-dock-manager-routing.module';
import { GridFinJSDockManagerModule } from '../projects/app-lob/src/app/grid-finjs-dock-manager/grid-finjs-dock-manager.module';
import { PaginationModule } from '../src/app/pagination/pagination.module';
import * as PaginatorRouting from '../src/app/pagination/pagination-routing.module';
import { PivotGridsModule } from '../src/app/pivot-grid/pivot-grids.module';
import { PivotGridsRoutingModule } from '../src/app/pivot-grid/pivot-grids-routing.module';
import { AppModule } from '../projects/app-crm/src/app/app.module';

export const MODULE_ROUTES = [
    {
        module: NotificationsModule,
        path: 'notifications',
        routes: NotificationsRouting.notificationsRoutes
    },
    {
        module: DataDisplayModule,
        path: 'data-display',
        routes: DataDisplayRouting.dataDisplayRoutes
    },
    {
        module: DataEntriesModule,
        path: 'data-entries',
        routes: DataEntriesRouting.dataEntriesRoutes
    },
    {
        module: ThemingModule,
        path: 'theming',
        routes: ThemingRouting.themingRoutes
    },
    {
        module: MenusModule,
        path: 'menus',
        routes: MenusRouting.menusRoutes
    },
    {
        module: SchedulingModule,
        path: 'scheduling',
        routes: SchedulingRouting.schedulingRoutes
    },
    {
        module: ListsModule,
        path: 'lists',
        routes: ListsRouting.listsRoutes
    },
    {
        module: InteractionsModule,
        path: 'interactions',
        routes: InteractionsRouting.interactionsRoutes
    },
    {
        module: LayoutsModule,
        path: 'layouts',
        routes: LayoutsRouting.layoutsRoutes
    },
    {
        module: TreeGridModule,
        path: 'tree-grid',
        routes: TreeGridRouting.treeGridRoutes
    },
    {
        module: GridsModule,
        path: 'grid',
        routes: GridRouting.gridsRoutes
    },
    {
        module: PivotGridsModule,
        path: 'pivot-grid',
        routes: PivotGridRouting.gridsRoutes
    },
    {
        module: HierarchicalGridModule,
        path: 'hierarchical-grid',
        routes: HierarchicalGridRouting.hierarchicalGridRoutes
    },
    {
        module: ServicesModule,
        path: 'services',
        routes: ServicesRouting.servicesRoutes
    },
    {
        module: PaginationModule,
        path: 'pagination',
        routes: PaginatorRouting.paginatorRoutes
    }
];

export const DV_MODULE_ROUTES = [
    {
        module: GridFinjsModule,
        path: 'grid-finjs',
        routes: GridFinjsRouting.gridfinjsRoutes
    },
    {
        module: TreeGridFinjsModule,
        path: 'treegrid-finjs',
        routes: TreeGridFinjsRouting.treegridfinjsRoutes
    },
    {
        module: GridsDVModule,
        path: 'grid',
        routes: GridsDVRouting.gridsDVRoutes
    },
    {
        module: TreeGridDVModule,
        path: 'tree-grid',
        routes: TreeGridDvRoutingModule.treeGridDVRoutes
    },
    {
        module: HierarchicalGridDVModule,
        path: 'hierarchical-grid',
        routes: HieararchicalGridsDVRouting.hierarchicalGridDVRoutes
    },
    {
        module: GridFinJSDockManagerModule,
        path: 'grid-finjs-dock-manager',
        routes: GridFinJSDockManagerRoutingModule.gridFinJsDockManagerGridRoutes
    }
];

export const CRM_MODULE_ROUTES = [
    {
        module: AppModule,
        path: 'grid-crm',
        routes: GridCRMRouting.gridCrmRoutes
    }
];
