
import * as GridFinjsRouting from '../projects/app-lob/src/app/grid-finjs/grid-finjs.routes';
import * as TreeGridFinjsRouting from '../projects/app-lob/src/app/treegrid-finjs/treegrid-finjs.routes';
import * as GridCRMRouting from '../projects/app-crm/src/app/app.routes';
import * as GridsDVRouting from '../projects/app-lob/src/app/grid/grids.routes';
// tslint:disable-next-line: max-line-length
import * as HieararchicalGridsDVRouting from '../projects/app-lob/src/app/hierarchical-grid/hierarchical-grid.routes';
import * as TreeGridDvRoutingModule from '../projects/app-lob/src/app/tree-grid/tree-grid.routes';
import * as DataDisplayRouting from '../src/app/data-display/data-display.routes';
import * as DataEntriesRouting from '../src/app/data-entries/data-entries.routes';
import * as GridRouting from '../src/app/grid/grids.routes';
import * as GridLiteRouting from '../src/app/grid-lite/grid-lite.routes';
import * as PivotGridRouting from '../src/app/pivot-grid/pivot-grids.routes';
import * as HierarchicalGridRouting from '../src/app/hierarchical-grid/hierarchical-grid.routes';
import * as InteractionsRouting from '../src/app/interactions/interactions.routes';
import * as LayoutsRouting from '../src/app/layouts/layouts.routes';
import * as ListsRouting from '../src/app/lists/lists.routes';
import * as MenusRouting from '../src/app/menus/menus.routes';
import * as NotificationsRouting from '../src/app/notifications/notifications.routes';
import * as SchedulingRouting from '../src/app/scheduling/scheduling.routes';
import * as ServicesRouting from '../src/app/services/services.routes';
import * as ThemingRouting from '../src/app/theming/theming.routes';
import * as TreeGridRouting from '../src/app/tree-grid/tree-grid.routes';
// eslint-disable-next-line max-len
import * as GridFinJSDockManagerRoutingModule from '../projects/app-lob/src/app/grid-finjs-dock-manager/grid-finjs-dock-manager.routes';
import * as PaginatorRouting from '../src/app/pagination/pagination.routes';
export const MODULE_ROUTES = [
    {
        path: 'notifications',
        routes: NotificationsRouting.NotificationsRoutes
    },
    {
        path: 'data-display',
        routes: DataDisplayRouting.DataDisplayRoutes
    },
    {
        path: 'data-entries',
        routes: DataEntriesRouting.DataEntriesRoutes
    },
    {
        path: 'theming',
        routes: ThemingRouting.ThemingRoutes
    },
    {
        path: 'menus',
        routes: MenusRouting.MenusRoutes
    },
    {
        path: 'scheduling',
        routes: SchedulingRouting.SchedulingRoutes
    },
    {
        path: 'lists',
        routes: ListsRouting.ListsRoutes
    },
    {
        path: 'interactions',
        routes: InteractionsRouting.InteractionsRoutes
    },
    {
        path: 'layouts',
        routes: LayoutsRouting.LayoutsRoutes
    },
    {
        path: 'tree-grid',
        routes: TreeGridRouting.TreeGridRoutes
    },
    {
        path: 'grid',
        routes: GridRouting.GridsRoutes
    },
    {
        path: 'grid-lite',
        routes: GridLiteRouting.GridLiteRoutes
    },
    {
        path: 'pivot-grid',
        routes: PivotGridRouting.PivotGridsRoutes
    },
    {
        path: 'hierarchical-grid',
        routes: HierarchicalGridRouting.HierarchicalGridRoutes
    },
    {
        path: 'services',
        routes: ServicesRouting.ServicesRoutes
    },
    {
        path: 'pagination',
        routes: PaginatorRouting.PaginatorRoutes
    }
];

export const DV_MODULE_ROUTES = [
    {
        path: 'grid-finjs',
        routes: GridFinjsRouting.GridfinjsRoutes
    },
    {
        path: 'treegrid-finjs',
        routes: TreeGridFinjsRouting.TreegridfinjsRoutes
    },
    {
        path: 'grid',
        routes: GridsDVRouting.GridsDVRoutes
    },
    {
        path: 'tree-grid',
        routes: TreeGridDvRoutingModule.TreeGridDVRoutes
    },
    {
        path: 'hierarchical-grid',
        routes: HieararchicalGridsDVRouting.HierarchicalGridDVRoutes
    },
    {
        path: 'grid-finjs-dock-manager',
        routes: GridFinJSDockManagerRoutingModule.GridFinJsDockManagerGridRoutes
    }
];

export const CRM_MODULE_ROUTES = [
    {
        path: 'grid-crm',
        routes: GridCRMRouting.GridCrmRoutes
    }
];
