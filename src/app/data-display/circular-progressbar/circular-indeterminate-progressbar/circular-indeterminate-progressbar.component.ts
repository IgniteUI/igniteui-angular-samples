import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCircularProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-circular-indeterminate-progressbar',
    styleUrls: ['./circular-indeterminate-progressbar.component.scss'],
    templateUrl: './circular-indeterminate-progressbar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCircularProgressBarComponent]
})
export class CircularIndeterminateProgressbarComponent { }
