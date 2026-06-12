import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-docs-layout',
    styleUrls: ['./docs-layout.component.scss'],
    template: `<router-outlet></router-outlet>`,
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterOutlet]
})

export class DocsLayoutComponent {
}
