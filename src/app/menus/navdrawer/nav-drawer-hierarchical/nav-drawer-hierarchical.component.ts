import { Component } from '@angular/core';
import { menusRoutes } from '../../menus-routing.module';

@Component({
  selector: 'app-nav-drawer-hierarchical',
  templateUrl: './nav-drawer-hierarchical.component.html',
  styleUrls: ['./nav-drawer-hierarchical.component.scss']
})
export class NavDrawerHierarchicalComponent {

    public routes = menusRoutes;

    constructor() { }

}
