import { Component, Inject, OnInit } from "@angular/core";
import { DisplayDensity, DisplayDensityToken, IDisplayDensity } from "igniteui-angular";

@Component({
    providers: [{ provide: DisplayDensityToken, useValue: { displayDensity: DisplayDensity.compact } }],
    selector: "app-display-density",
    styleUrls: ["./display-density.component.scss"],
    templateUrl: "./display-density.component.html"
})

export class DisplayDensityComponent implements OnInit {
    public displayDensities;
    public density: string = DisplayDensity.comfortable;
    public user;

    constructor(@Inject(DisplayDensityToken) public displayDensityOptions: IDisplayDensity) { }

    public ngOnInit() {
        this.displayDensities = [
            {
                label: "compact",
                selected: this.density === DisplayDensity.compact,
                togglable: true
            },
            {
                label: "cosy",
                selected: this.density === DisplayDensity.cosy,
                togglable: true
            },
            {
                label: "comfortable",
                selected: this.density === DisplayDensity.comfortable,
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

        switch (this.density) {
            case DisplayDensity.comfortable: {
                this.displayDensityOptions.displayDensity = DisplayDensity.comfortable;
                break;
            }
            case DisplayDensity.compact: {
                this.displayDensityOptions.displayDensity = DisplayDensity.compact;
                break;
            }
            case DisplayDensity.cosy: {
                this.displayDensityOptions.displayDensity = DisplayDensity.cosy;
                break;
            }
        }
    }
}
