import { useAnimation } from "@angular/animations";
import { Component, ElementRef, forwardRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";

import {
    growVerIn,
    growVerOut,
    IgxExpansionPanelComponent,
    slideInLeft,
    slideOutRight,
    swingInLeftFwd,
    swingOutRightBck,
} from "igniteui-angular";
// import { EaseOut } from "igniteui-angular/lib/animations/easings";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-sample-5",
    styleUrls: ["./expansion-sample-5.component.scss"],
    templateUrl: "./expansion-sample-5.component.html"
})
export class ExpansionPanelSample5Component implements OnInit {
    // @ViewChild(IgxExpansionPanelComponent)
    // public igxExpansionPanel: IgxExpansionPanelComponent;

    @ViewChildren(forwardRef(() => IgxExpansionPanelComponent), { read: IgxExpansionPanelComponent })
    public expansionPanels: QueryList<IgxExpansionPanelComponent>;

    public animationSettingsOverride = {
        closeAnimation: useAnimation(growVerOut, {
                params: {
                    duration: "300ms",
                    // endHeight: "*",
                    endOpacity: 0.9,
                    // startHeight: "0px",
                    startOpacity: 0
                }
            }),
        openAnimation: useAnimation(growVerIn, {
                params: {
                    // delay: "30ms",
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
        closeAnimation: useAnimation(slideOutRight, {
                params: {
                    delay: "30ms",
                    duration: "100ms",
                    fromPosition: "translateX(100px)"
                //     // easing: EaseOut.quad,
                //     endHeight: "*",
                //     endOpacity: 1,
                //     startHeight: "0px",
                //     startOpacity: 0
                }
            }),
        openAnimation: useAnimation(slideInLeft, {
                params: {
                    delay: "30ms",
                    duration: "500ms",
                    fromPosition: "translateX(-300px)"
                    // easing: EaseOut.quad,
                    // endHeight: "0px",
                    // endOpacity: 0,
                    // startHeight: "*",
                    // startOpacity: 1
                }
            })
    };

    // public person = "Pe6o";

    public expandedItem = null;

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

     public collapsed(index: number) {
    //      //return this.igxExpansionPanel && this.igxExpansionPanel.collapsed;
    //      // TODO
    //      if (!this.expansionPanels) {
    //         return true;
    //      }
    //      return this.expansionPanels[index] && this.expansionPanels[index].collapsed;
        return true;
     }

    public handleCollapsed(event) {
        console.log(`I'm collapsing!`, event);
    }
    public handleExpanded(event) {
        console.log(`I'm expanding!`, event);
    }
    public onInteraction(event) {
        console.log(`Header's touched!`, event);
        // TODO get reference to the active component
       // this.expandedItem = ;
        const expandedPanels = this.expansionPanels.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.elementRef !==  event.event.currentTarget) {
                expandedPanel.collapse();
            }
        });
    }
}
