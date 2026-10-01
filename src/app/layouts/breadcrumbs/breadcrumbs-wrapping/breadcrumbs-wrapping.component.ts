import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcBreadcrumbComponent, IgcBreadcrumbsComponent } from 'igniteui-webcomponents';

defineComponents(IgcBreadcrumbsComponent, IgcBreadcrumbComponent);

@Component({
    selector: 'app-breadcrumbs-wrapping',
    styleUrls: ['./breadcrumbs-wrapping.component.scss'],
    templateUrl: './breadcrumbs-wrapping.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BreadcrumbsWrappingComponent { }
