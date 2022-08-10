import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-nav-drawer-hierarchical',
    templateUrl: './nav-drawer-hierarchical.component.html',
    styleUrls: ['./nav-drawer-hierarchical.component.scss']
})
export class NavDrawerHierarchicalComponent implements OnInit {

    public selectedContent = 'Home';
    public routes = [
        {
            path: 'grids', displayName: 'Grids',
            children: [
                { path: 'grid', displayName: 'Data Grid' },
                { path: 'tree-grid', displayName: 'Tree Grid' },
                { path: 'hierarchical-grid', displayName: 'Hierarchical Grid' },
                { path: 'pivot-grid', displayName: 'Pivot Grid' }
            ]
        },
        {
            path: 'charts', displayName: 'Charts',
            children: [
                { path: 'area-chart', displayName: 'Area Chart' },
                { path: 'bar-chart', displayName: 'Bar Chart' },
                { path: 'column-chart', displayName: 'Column Chart' },
                { path: 'pie-chart', displayName: 'Pie Chart' }
            ]
        },
        {
            path: 'ineractions', displayName: 'Ineractions',
            children: [
                { path: 'action-strip', displayName: 'Action Strip' },
                { path: 'dialog', displayName: 'Dialog' },
                { path: 'drag-drop', displayName: 'Drag and Drop' }
            ]
        },
        {
            path: 'layouts', displayName: 'Layouts',
            children: [
                { path: 'dock-manager', displayName: 'Dock Manager' },
                { path: 'expansion-panel', displayName: 'Exspansion Panel' },
                { path: 'layout', displayName: 'Layout Manager' }
            ]
        },
        {
            path: 'notifications', displayName: 'Notifications',
            children: [
                { path: 'banner', displayName: 'Banner' },
                { path: 'snackbar', displayName: 'Snackbar' },
                { path: 'toast', displayName: 'Toast' }
            ]
        }
    ]

    constructor(private route: Router) { }

    public ngOnInit() {
        this.route.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                const url = event.url.split('/');
                this.selectedContent = url[url.length - 1];
            }
        });
    }
}