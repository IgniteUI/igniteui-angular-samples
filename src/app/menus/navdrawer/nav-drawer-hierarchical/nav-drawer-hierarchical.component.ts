import { Component } from '@angular/core';

@Component({
    selector: 'app-nav-drawer-hierarchical',
    templateUrl: './nav-drawer-hierarchical.component.html',
    styleUrls: ['./nav-drawer-hierarchical.component.scss']
})
export class NavDrawerHierarchicalComponent {

    public topicLinks = [
        {
            name: 'Grids',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid', name: 'Data Grid' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/treegrid/tree-grid', name: 'Tree Grid' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/hierarchicalgrid/hierarchical-grid', name: 'Hierarchical Grid' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/pivotGrid/pivot-grid', name: 'Pivot Grid' }
            ]
        },
        {
            name: 'Charts',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/area-chart', name: 'Area Chart' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/bar-chart', name: 'Bar Chart' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/column-chart', name: 'Column Chart' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/charts/types/pie-chart', name: 'Pie Chart' }
            ]
        },
        {
            name: 'Ineractions',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/action-strip', name: 'Action Strip' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/dialog', name: 'Dialog' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/drag-drop', name: 'Drag and Drop' }
            ]
        },
        {
            name: 'Layouts',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/dock-manager', name: 'Dock Manager' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/expansion-panel', name: 'Exspansion Panel' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/layout', name: 'Layout Manager' }
            ]
        },
        {
            name: 'Notifications',
            children: [
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/banner', name: 'Banner' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/snackbar', name: 'Snackbar' },
                { path: 'https://www.infragistics.com/products/ignite-ui-angular/angular/components/toast', name: 'Toast' }
            ]
        }
    ]

    constructor() { }

}
