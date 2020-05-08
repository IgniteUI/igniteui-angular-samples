import { Component, ViewChild } from "@angular/core";
import { IgxLinearProgressBarComponent } from "igniteui-angular";

@Component({
    selector: "app-linear-progressbar-styling",
    styleUrls: ["./linear-progressbar-styling-sample.component.scss"],
    templateUrl: "./linear-progressbar-styling-sample.component.html"
})
export class LinearProgressbarStylingComponent {

    public interval: any;

    @ViewChild(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
    public linearBar: IgxLinearProgressBarComponent;

    public ngOnInit() {
    this.interval = setInterval(this.updateValue.bind(this), 60);
    }

    public updateValue() {
        this.linearBar.value += 1;
    }
}
