import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcBreadcrumbComponent, IgcBreadcrumbsComponent, IgcIconComponent, registerIconFromText } from 'igniteui-webcomponents';

defineComponents(IgcBreadcrumbsComponent, IgcBreadcrumbComponent, IgcIconComponent);

const musicNoteIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>';
const homeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

if (typeof window !== 'undefined') {
    registerIconFromText('music_note', musicNoteIcon);
    registerIconFromText('home', homeIcon);
}

@Component({
    selector: 'app-breadcrumbs-styling',
    styleUrls: ['./breadcrumbs-styling.component.scss'],
    templateUrl: './breadcrumbs-styling.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BreadcrumbsStylingComponent { }
