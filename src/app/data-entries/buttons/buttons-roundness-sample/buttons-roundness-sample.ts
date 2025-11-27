import { Component } from '@angular/core';
import { IgxButtonDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-buttons-roundness-sample',
    styleUrls: ['./buttons-roundness-sample.scss'],
    templateUrl: './buttons-roundness-sample.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxIconButtonDirective]
})
export class ButtonsRoundnessComponent {}
