import { Component, OnInit } from '@angular/core';
import { IgxCircularProgressBarComponent, IgxProgressBarGradientDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-circular-dynamic-sample',
    styleUrls: ['./circular-dynamic-sample.component.scss'],
    templateUrl: './circular-dynamic-sample.component.html',
    imports: [IgxCircularProgressBarComponent, IgxProgressBarGradientDirective, IgxIconButtonDirective, IgxIconComponent]
})
export class CircularDynamicSampleComponent implements OnInit {

    public currentValue: number;

    public ngOnInit() {
        this.currentValue = 0;
    }

    public incrementProgress() {
        this.currentValue += 10;
        if (this.currentValue > 100) {
            this.currentValue = 100;
        }
    }

    public decrementProgress() {
        this.currentValue -= 10;
        if (this.currentValue < 0) {
            this.currentValue = 0;
        }
    }
}
