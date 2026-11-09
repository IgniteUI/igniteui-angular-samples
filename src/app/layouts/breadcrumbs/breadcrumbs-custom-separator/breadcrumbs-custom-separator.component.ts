import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcBreadcrumbComponent, IgcBreadcrumbsComponent, registerIconFromText } from 'igniteui-webcomponents';

defineComponents(IgcBreadcrumbsComponent, IgcBreadcrumbComponent);

const slashIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"><path d="M12.8535 3C13.3976 3 13.7655 3.55489 13.5537 4.05604L7.85788 17.5331C7.73829 17.8161 7.46093 18 7.15374 18C6.60638 18 6.23639 17.4416 6.44976 16.9375L12.1535 3.46381C12.2725 3.18266 12.5482 3 12.8535 3Z" fill="currentColor"/></svg>';

if (typeof window !== 'undefined') {
    registerIconFromText('slash', slashIcon);
}

@Component({
    selector: 'app-breadcrumbs-custom-separator',
    styleUrls: ['./breadcrumbs-custom-separator.component.scss'],
    templateUrl: './breadcrumbs-custom-separator.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BreadcrumbsCustomSeparatorComponent { }
