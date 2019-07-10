import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ISelectionEventArgs } from "igniteui-angular";

@Component({
    selector: "app-tabs-sample-6",
    styleUrls: ["./tabs-sample-6.component.scss"],
    templateUrl: "./tabs-sample-6.component.html"
})
export class TabsSample6Component implements OnInit {
    public urlLocations = [];

    constructor(private router: Router) { }

    public get currentDocumentLocation() {
        return document.location.pathname;
    }

    public ngOnInit() {
        const availableAddresses = [
            { label: "/layouts/tabs-sample-6", url: "/layouts/tabs-sample-6" },
            { label: "/layouts/tabs-sample-6/view1", url: "/layouts/tabs-sample-6/view1" },
            { label: "/layouts/tabs-sample-6/view2", url: "/layouts/tabs-sample-6/view2" },
            { label: "/layouts/tabs-sample-6/view3", url: "/layouts/tabs-sample-6/view3" }
        ];

        const currentAddress: string = document.location.href;
        if (currentAddress.indexOf("samples") !== -1) {
            availableAddresses.forEach(address => {
                this.urlLocations.push({
                    label: "/samples" + address.label,
                    url: "/samples" + address.url
                });
            });
        } else {
            availableAddresses.forEach(address => {
                this.urlLocations.push(address);
            });
        }
    }

    public handleSelection(eventArgs: ISelectionEventArgs): void {
        this.router.navigateByUrl(eventArgs.newSelection.value);
    }
}

@Component({
    styles: [
        ":host { display: flex; flex-flow: column nowrap; padding: 10px; }"
    ],
    template: `
        Push Buttons
        <div style="display: flex; justify-content: space-around; align-items: center; ">
            <button igxButton="flat" igxRipple>Flat</button> <br>
            <button igxButton="raised" igxRipple>Raised</button> <br>
            <button igxButton="outlined" igxRipple>Outlined</button> <br>
            <button igxButton="icon" igxRipple>
                <igx-icon fontSet="material">favorite</igx-icon>
            </button> <br>
            <button igxButton="fab" igxRipple>
                <igx-icon fontSet="material">favorite</igx-icon>
            </button>
        </div>
    `
})
export class TabsRoutingView1Component {
}

@Component({
    styles: [
        ":host { display: flex; flex-flow: column nowrap; padding: 10px; }",
        "igx-checkbox { margin-top: 16px; }"
    ],
    template: `
        Checkbox Buttons
        <igx-checkbox [checked]="true">Research</igx-checkbox>
        <igx-checkbox [checked]="true">Design</igx-checkbox>
        <igx-checkbox [checked]="false">Implement</igx-checkbox>
        <igx-checkbox [checked]="false">Test</igx-checkbox>
        <igx-checkbox [checked]="false">Integrate</igx-checkbox>
    `
})
export class TabsRoutingView2Component {
}

@Component({
    styles: [
        ":host { display: flex; flex-flow: column nowrap; padding: 10px; }",
        "igx-radio { margin-top: 16px; }"
    ],
    template: `
        Radio Buttons
        <igx-radio *ngFor="let food of foods" [(ngModel)]="selectedFood" value="{{ food }}">{{ food }}</igx-radio>
    `
})
export class TabsRoutingView3Component {
    public foods = ["Apple", "Apricot", "Banana", "Nectarine", "Orange"];
    public selectedFood: string = this.foods[2];
}
