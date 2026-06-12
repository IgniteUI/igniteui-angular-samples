import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-linear-progressbar-sample-1',
    styleUrls: ['./linear-progressbar-sample-1.component.scss'],
    templateUrl: './linear-progressbar-sample-1.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarSample1Component {}
