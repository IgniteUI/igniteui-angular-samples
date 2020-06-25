import { Component, OnInit } from "@angular/core";
import { IgxIconService } from "igniteui-angular";

@Component({
    selector: "app-svg-icon-sample",
    styleUrls: ["./svg-icon-sample.component.css"],
    templateUrl: "./svg-icon-sample.component.html"
})
export class SvgIconSampleComponent implements OnInit {

    constructor(private iconService: IgxIconService) { }

    public ngOnInit() {
        // register custom SVG icons
        this.iconService.addSvgIcon("contains", "https://www.infragistics.com/angular-demos/assets/images/svg/contains.svg", "filter-icons");
        this.iconService.addSvgIcon("does_not_contain", "https://www.infragistics.com/angular-demos/assets/images/svg/does_not_contain.svg", "filter-icons");
        this.iconService.addSvgIcon("does_not_equal", "https://www.infragistics.com/angular-demos/assets/images/svg/does_not_equal.svg", "filter-icons");
        this.iconService.addSvgIcon("ends_with", "https://www.infragistics.com/angular-demos/assets/images/svg/ends_with.svg", "filter-icons");
        this.iconService.addSvgIcon("equals", "https://www.infragistics.com/angular-demos/assets/images/svg/equals.svg", "filter-icons");
        this.iconService.addSvgIcon("is_empty", "https://www.infragistics.com/angular-demos/assets/images/svg/is_empty.svg", "filter-icons");
        this.iconService.addSvgIcon("starts_with", "https://www.infragistics.com/angular-demos/assets/images/svg/starts_with.svg", "filter-icons");
    }
}
