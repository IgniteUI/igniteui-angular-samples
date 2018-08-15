import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart-data-sample',
  templateUrl: './pie-chart-data-sample.component.html',
  styleUrls: ['./pie-chart-data-sample.component.scss']
})
export class PieChartDataSampleComponent {

public data : any;

constructor() {
    this.data = [
        { Label: "Administration", Value: 2 },
        { Label: "Sales", Value: 8 },
        { Label: "IT", Value: 3 },        
        { Label: "Marketing", Value: 8 },
        { Label: "Development", Value: 4 },
        { Label: "Customer Support", Value: 6 }        
    ];
  }   
}
