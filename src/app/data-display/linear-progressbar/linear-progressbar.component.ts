import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';

@Component({
    selector: 'app-linear-progressbar',
    styleUrls: ['./linear-progressbar.component.scss'],
    templateUrl: './linear-progressbar.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxLinearProgressBarComponent]
})
export class LinearProgressbarComponent { }
