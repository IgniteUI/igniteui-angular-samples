import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcBreadcrumbComponent, IgcBreadcrumbsComponent, IgcIconComponent, IgcBadgeComponent, registerIconFromText } from 'igniteui-webcomponents';

defineComponents(IgcBreadcrumbsComponent, IgcBreadcrumbComponent, IgcIconComponent, IgcBadgeComponent);

const homeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

if (typeof window !== 'undefined') {
    registerIconFromText('home', homeIcon);
}

@Component({
    selector: 'app-breadcrumbs-prefix-suffix',
    styleUrls: ['./breadcrumbs-prefix-suffix.component.scss'],
    templateUrl: './breadcrumbs-prefix-suffix.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BreadcrumbsPrefixSuffixComponent { }
