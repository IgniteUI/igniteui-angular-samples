import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-linear-dynamic-sample',
    styleUrls: ['./linear-dynamic-sample.component.scss'],
    templateUrl: './linear-dynamic-sample.component.html',
    standalone: false
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
