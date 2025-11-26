import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    imports: [IgxButtonDirective, RouterLink]
})
export class TGridAboutComponent {
}
