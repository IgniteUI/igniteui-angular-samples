import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-progressbar',
    templateUrl: './progressbar.component.html',
    styleUrls: ['./progressbar.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ProgressbarComponent implements OnInit {

    public currentValue: number;
    public type: string;

    constructor() {
        this.currentValue = 0;
        this.generateNewProgressValues();
    }

    public generateNewProgressValues() {
        const value = this.randomIntFromInterval(this.currentValue, 100);

        this.currentValue = value;
    }

    private randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    ngOnInit() {
    }

}
