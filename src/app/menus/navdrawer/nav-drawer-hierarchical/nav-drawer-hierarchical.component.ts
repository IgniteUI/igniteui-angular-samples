import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-drawer-hierarchical',
    templateUrl: './nav-drawer-hierarchical.component.html',
    styleUrls: ['./nav-drawer-hierarchical.component.scss']
})
export class NavDrawerHierarchicalComponent {

    public topicLinks = [
        {
            path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/grids-and-lists', data: 'Grids',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid', data: 'Data Grid' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/tree-grid', data: 'Tree Grid' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid/hierarchical-grid', data: 'Hierarchical Grid' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/pivotGrid/pivot-grid', data: 'Pivot Grid' }
            ]
        },
        {
            path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/chart-overview', data: 'Charts',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/area-chart', data: 'Area Chart' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/bar-chart', data: 'Bar Chart' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/column-chart', data: 'Column Chart' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/pie-chart', data: 'Pie Chart' }
            ]
        },
        {
            path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/chart-overview', data: 'Ineractions',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/action-strip', data: 'Action Strip' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog', data: 'Dialog' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/drag-drop', data: 'Drag and Drop' }
            ]
        },
        {
            path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/chart-overview', data: 'Layouts',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/dock-manager', data: 'Dock Manager' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/expansion-panel', data: 'Exspansion Panel' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/layout', data: 'Layout Manager' }
            ]
        },
        {
            path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/chart-overview', data: 'Notifications',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/banner', data: 'Banner' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/snackbar', data: 'Snackbar' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/toast', data: 'Toast' }
            ]
        }
    ]

    constructor() { }

}
