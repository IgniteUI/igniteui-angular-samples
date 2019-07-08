import { Component } from "@angular/core";
import { ISelectionEventArgs } from "igniteui-angular";

@Component({
    selector: "app-tabs-sample-6",
    styleUrls: ["./tabs-sample-6.component.scss"],
    templateUrl: "./tabs-sample-6.component.html"
})
export class TabsSample6Component {
    public urlLocations = [
        { label: "View 1", url: "view1" },
        { label: "View 2", url: "view2" },
        { label: "View 3", url: "view3" }
    ];

    constructor() { }

    public get currentDocumentLocation() {
        return document.location.href;
    }

    public onDropDownSelection(eventArgs: ISelectionEventArgs) {
        const currentAddress: string = document.location.href;
        let baseAddress: string;
        if (currentAddress.indexOf("samples") !== -1) {
            baseAddress = "/samples/layouts/tabs-sample-6/";
        } else {
            baseAddress = "/layouts/tabs-sample-6/";
        }
        document.location.href = baseAddress + eventArgs.newSelection.value;
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
