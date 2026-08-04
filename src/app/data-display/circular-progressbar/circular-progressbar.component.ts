import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCircularProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-circular-progressbar',
    styleUrls: ['./circular-progressbar.component.scss'],
    templateUrl: './circular-progressbar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCircularProgressBarComponent]
})
export class CircularProgressbarComponent { }
