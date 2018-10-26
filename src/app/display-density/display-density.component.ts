import { Component, Inject, OnInit } from "@angular/core";
import { DisplayDensity, DisplayDensityToken, IDisplayDensity } from "igniteui-angular";

@Component({
    providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: "comfortable" } }],
    selector: "app-display-density",
    styleUrls: ["./display-density.component.scss"],
    templateUrl: "./display-density.component.html"
})

export class DisplayDensityComponent implements OnInit {
    public displayDensities;
    public density: any;
    public user;

    constructor(@Inject(DisplayDensityToken) public displayDensityOptions: IDisplayDensity) { }

    public ngOnInit() {
        const initialDensity = this.displayDensityOptions.displayDensity;
        this.displayDensities = [
            {
                label: "compact",
                selected: initialDensity == "compact",
                togglable: true
            },
            {
                label: "cosy",
                selected: initialDensity == "cosy",
                togglable: true
            },
            {
                label: "comfortable",
                selected: initialDensity == "comfortable",
                togglable: true
            }
        ];

        this.user = {
            firstName: "John",
            lastName: "Smith",
            phone: "888 123 456"
        };
    }

    public changeDensity(eventArgs) {
        this.density = this.displayDensities[eventArgs.index].label;
        this.displayDensityOptions.displayDensity = this.density;
    }
}
