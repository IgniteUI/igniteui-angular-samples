import { Component } from '@angular/core'
import { ThemableDirective } from './common/themable-app.directive';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})
export class AppComponent extends ThemableDirective {
    public title = 'Samples';
}
