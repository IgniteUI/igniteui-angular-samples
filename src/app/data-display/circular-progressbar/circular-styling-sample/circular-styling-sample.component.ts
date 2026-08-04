import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCircularProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-circular-styling-sample',
    styleUrls: ['./circular-styling-sample.component.scss'],
    templateUrl: './circular-styling-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCircularProgressBarComponent]
})
export class CircularStylingSampleComponent { }
