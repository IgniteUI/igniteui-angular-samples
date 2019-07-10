import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ISelectionEventArgs } from "igniteui-angular";

@Component({
    selector: "app-tabbar-sample-3",
    styleUrls: ["tabbar-sample-3.component.scss"],
    templateUrl: "tabbar-sample-3.component.html"
})
export class TabbarSample3Component implements OnInit {
    public urlLocations = [];

    constructor(private router: Router) { }

    public get currentDocumentLocation() {
        return document.location.pathname;
    }

    public ngOnInit() {
        const availableAddresses = [
            { label: "/layouts/tabbar-sample-3", url: "/layouts/tabbar-sample-3" },
            { label: "/layouts/tabbar-sample-3/view1", url: "/layouts/tabbar-sample-3/view1" },
            { label: "/layouts/tabbar-sample-3/view2", url: "/layouts/tabbar-sample-3/view2" },
            { label: "/layouts/tabbar-sample-3/view3", url: "/layouts/tabbar-sample-3/view3" }
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
export class BottomNavRoutingView1Component {
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
export class BottomNavRoutingView2Component {
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
export class BottomNavRoutingView3Component {
    public foods = ["Apple", "Apricot", "Banana", "Nectarine", "Orange"];
    public selectedFood: string = this.foods[2];
}
