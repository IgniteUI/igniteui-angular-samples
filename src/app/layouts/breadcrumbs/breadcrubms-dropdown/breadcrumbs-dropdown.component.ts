import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcBreadcrumbComponent, IgcBreadcrumbsComponent, IgcDropdownComponent, IgcDropdownItemComponent, IgcIconComponent, registerIconFromText } from 'igniteui-webcomponents';

defineComponents(IgcBreadcrumbsComponent, IgcBreadcrumbComponent, IgcDropdownComponent, IgcDropdownItemComponent, IgcIconComponent);

const threeDotsIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"></path></svg>';

const folderIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></svg>';

if (typeof window !== 'undefined') {
    registerIconFromText('three-dots', threeDotsIcon);
    registerIconFromText('folder', folderIcon);
}

@Component({
    selector: 'app-breadcrumbs-dropdown',
    styleUrls: ['./breadcrumbs-dropdown.component.scss'],
    templateUrl: './breadcrumbs-dropdown.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class BreadcrumbsDropdownComponent { }
