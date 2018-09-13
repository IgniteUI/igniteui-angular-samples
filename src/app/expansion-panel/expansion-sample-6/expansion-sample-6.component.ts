import { useAnimation } from "@angular/animations";
import { Component, ViewChild } from "@angular/core";

import {
    IgxExpansionPanelComponent,
    slideInLeft,
    slideOutRight
} from "igniteui-angular";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-sample-6",
    styleUrls: ["./expansion-sample-6.component.scss"],
    templateUrl: "./expansion-sample-6.component.html"
})
export class ExpansionPanelSample6Component {

    @ViewChild(IgxExpansionPanelComponent)
    public panel: IgxExpansionPanelComponent;

    public animationSettingsCustom = {
        closeAnimation: useAnimation(slideOutRight, {
                params: {
                    duration: "100ms",
                    toPosition: "translateX(100px)"
            }
        }),
        openAnimation: useAnimation(slideInLeft, {
                params: {
                    duration: "500ms",
                    endOpacity: 1,
                    fromPosition: "translateX(-50px)",
                    startOpacity: 0.2
                }
            })
    };

    public user = {
        email: "",
        fullName: "",
        phone: ""
    };

    public collapsed() {
        return this.panel && this.panel.collapsed;
    }
}
