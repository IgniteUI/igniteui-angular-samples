import { Component, OnInit } from '@angular/core';
import { FinancialDataService } from "../services/financial-data.service";

@Component({
  selector: 'app-time-based-data',
  templateUrl: './time-based-data.component.html',
  styleUrls: ['./time-based-data.component.scss']
})
export class TimeBasedDataComponent {

    public data: any;
    constructor(private dataService: FinancialDataService) {
        this.data = [ this.dataService.getAmzn()];
    }
}
