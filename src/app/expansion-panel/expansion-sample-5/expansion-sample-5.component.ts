import { useAnimation } from "@angular/animations";
import { Component, ElementRef, forwardRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";

import {
    growVerIn,
    growVerOut,
    IgxExpansionPanelComponent,
    swingInLeftFwd,
    swingOutRightBck
} from "igniteui-angular";
// import { EaseOut } from "igniteui-angular/lib/animations/easings";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-sample-5",
    styleUrls: ["./expansion-sample-5.component.scss"],
    templateUrl: "./expansion-sample-5.component.html"
})
export class ExpansionPanelSample5Component implements OnInit {

    public igxExpansionPanel: IgxExpansionPanelComponent;

    @ViewChildren(forwardRef(() => IgxExpansionPanelComponent), { read: IgxExpansionPanelComponent })
    public expansionPanels: QueryList<IgxExpansionPanelComponent>;

    public animationSettingsOverride = {
        closeAnimation: useAnimation(growVerOut, {
                params:
                    {
                    delay: "30ms",
                    duration: "500ms",
                    // endHeight: "*",
                    endOpacity: 0.9,
                    // startHeight: "0px",
                    startOpacity: 0
                }
            }),
        openAnimation: useAnimation(growVerIn, {
                params: {
                    delay: "30ms",
                    // easing: EaseOut.quad,
                    duration: "500ms",
                    // endHeight: "0px",
                    endOpacity: 0,
                    // startHeight: "*",
                    startOpacity: 0.9
                }
            })
    };

    public animationSettingsCustom = {
        closeAnimation: useAnimation(swingInLeftFwd
            , {
                    // params:
                    //     {
                    //     // easing: EaseOut.quad,
                    //     endHeight: "*",
                    //     endOpacity: 1,
                    //     startHeight: "0px",
                    //     startOpacity: 0
                    // }
                }
                ),
        openAnimation: useAnimation(swingOutRightBck
            , {
                params: {
                    // easing: EaseOut.quad,
                    // endHeight: "0px",
                    // endOpacity: 0,
                    // startHeight: "*",
                    // startOpacity: 1
                }
            }
            )
    };

    public person = "Pe6o";

    public user = {
        email: "",
        fullName: "",
        phone: ""
    };

    public billingAddress = {
        address: "",
        city: "",
        state: "",
        zipCode: ""
    };

    public shippingAddress = {
        address: "",
        city: "",
        state: "",
        zipCode: ""
    };

    constructor() {
    }

    public ngOnInit() {
    }

    public collapsed() {
        // return this.igxExpansionPanel && this.igxExpansionPanel.collapsed;
    }

    public handleCollapsed(event) {
        console.log(`I'm collapsing!`, event);
    }
    public handleExpanded(event) {
        console.log(`I'm expanding!`, event);
    }
    public onInteraction(event) {
        console.log(`Header's touched!`, event);

        const expandedPanels = this.expansionPanels.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.elementRef !==  event.event.currentTarget) {
                expandedPanel.collapse();
            }
        });
    }
}
