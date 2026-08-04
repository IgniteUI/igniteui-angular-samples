import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-linear-progressbar-styling',
    styleUrls: ['./linear-progressbar-styling-sample.component.scss'],
    templateUrl: './linear-progressbar-styling-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarStylingComponent { }
