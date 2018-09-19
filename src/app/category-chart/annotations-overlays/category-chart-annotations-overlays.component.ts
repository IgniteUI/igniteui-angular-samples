import { Component } from '@angular/core';
import { CrosshairsVisibility } from "igniteui-angular-charts/ES5/CrosshairsVisibility";
import { TooltipType } from "igniteui-angular-charts/ES5/TooltipType";

@Component({
    selector: 'app-category-chart-annotations-overlays',
    templateUrl: './category-chart-annotations-overlays.component.html',
    styleUrls: ['./category-chart-annotations-overlays.component.scss']
})
export class CategoryChartAnnotationsOverlaysComponent {
    public CrosshairsVisibility = CrosshairsVisibility;
    public TooltipType = TooltipType;

    public categoryData: any;
    public sampleOptions: SampleOptions = new SampleOptions();

    constructor() {
        const usaMedals: any = [
            { Year: "1996", UnitedStates: 148 },
            { Year: "2000", UnitedStates: 142 },
            { Year: "2004", UnitedStates: 134 },
            { Year: "2008", UnitedStates: 131 },
            { Year: "2012", UnitedStates: 135 },
            { Year: "2016", UnitedStates: 146 }
        ];
        const chinaMedals: any = [
            { Year: "1996", China: 110 },
            { Year: "2000", China: 115 },
            { Year: "2004", China: 121 },
            { Year: "2008", China: 129 },
            { Year: "2012", China: 115 },
            { Year: "2016", China: 112 }
        ];
        const russiaMedals: any = [
            { Year: "1996", Russia: 95 },
            { Year: "2000", Russia: 91 },
            { Year: "2004", Russia: 86 },
            { Year: "2008", Russia: 65 },
            { Year: "2012", Russia: 77 },
            { Year: "2016", Russia: 88 }
        ];
        this.categoryData = [ usaMedals, chinaMedals, russiaMedals ];
    }

}

class SampleOptions {
    public highlightCategory: boolean = false;
    public highlightItem: boolean = false;

    public tooltipType: string = "Default";
  
    public crosshairs: string = "Horizontal";
    public snapCrosshairs: boolean = true;
    public crosshairAnnotations: boolean = true;
  
    public finalValueAnnotations: boolean = false;
  
    public eventAnnotations: boolean = false;
}
