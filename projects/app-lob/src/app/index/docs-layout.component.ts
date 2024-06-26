import { Component } from '@angular/core';
import { ThemableDirective } from '../../../../../src/app/common/themable-app.directive';

@Component({
    selector: 'app-docs-layout',
    styleUrls: ['./docs-layout.component.scss'],
    template: `<router-outlet></router-outlet>`
})
export class DocsLayoutComponent extends ThemableDirective {

}
