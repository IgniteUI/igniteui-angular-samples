import { Component, OnInit } from "@angular/core";
import { IgxIconService } from "igniteui-angular";

@Component({
    selector: "app-svg-icon-sample",
    styleUrls: ["./svg-icon-sample.component.scss"],
    templateUrl: "./svg-icon-sample.component.html"
})
export class SvgIconSampleComponent implements OnInit {

    constructor(private iconService: IgxIconService) { }

    public ngOnInit() {
        // register custom SVG icons
        this.iconService.addSvgIcon("contains", "/assets/images/svg/contains.svg", "filtering");
        this.iconService.addSvgIcon("does_not_contain", "/assets/images/svg/does_not_contain.svg", "svg-flags");
        this.iconService.addSvgIcon("does_not_equal", "/assets/images/svg/does_not_equal.svg", "svg-flags");
        this.iconService.addSvgIcon("ends_with", "/assets/images/svg/ends_with.svg", "svg-flags");
        this.iconService.addSvgIcon("equals", "/assets/images/svg/equals.svg", "svg-flags");
        this.iconService.addSvgIcon("is_empty", "/assets/images/svg/is_empty.svg", "svg-flags");
        this.iconService.addSvgIcon("starts_with", "/assets/images/svg/starts_with.svg", "svg-flags");
    }
}
