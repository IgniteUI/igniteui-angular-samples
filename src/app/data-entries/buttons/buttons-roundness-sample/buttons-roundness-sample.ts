import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxIconButtonDirective } from 'igniteui-angular';

@Component({
    selector: 'app-buttons-roundness-sample',
    styleUrls: ['./buttons-roundness-sample.scss'],
    templateUrl: './buttons-roundness-sample.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxIconButtonDirective]
})
export class ButtonsRoundnessComponent {}
