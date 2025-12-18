import { Component, OnInit } from '@angular/core';
import { IgxLinearProgressBarComponent } from 'igniteui-angular/progressbar';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-linear-dynamic-sample',
    styleUrls: ['./linear-dynamic-sample.component.scss'],
    templateUrl: './linear-dynamic-sample.component.html',
    imports: [IgxLinearProgressBarComponent, IgxIconButtonDirective, IgxIconComponent]
})
export class LinearDynamicSampleComponent implements OnInit{

    public currentValue: number;

    public ngOnInit() {
        this.currentValue = 50;
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
