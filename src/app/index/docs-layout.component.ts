import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-docs-layout',
    styleUrls: ['./docs-layout.component.scss'],
    template: `<router-outlet></router-outlet>`,
    imports: [RouterOutlet]
})

export class DocsLayoutComponent {
}
