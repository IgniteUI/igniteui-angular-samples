import { useAnimation } from "@angular/animations";
import { Component, QueryList, ViewChildren } from "@angular/core";

import {
    IgxExpansionPanelComponent
} from "igniteui-angular";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-sample-5",
    styleUrls: ["./expansion-sample-5.component.scss"],
    templateUrl: "./expansion-sample-5.component.html"
})
export class ExpansionPanelSample5Component {

    @ViewChildren(IgxExpansionPanelComponent)
    public expansionPanels: QueryList<IgxExpansionPanelComponent>;

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

    public collapsed(index: number) {
         if (!this.expansionPanels) {
            return true;
         }
         return this.expansionPanels.toArray()[index] && this.expansionPanels.toArray()[index].collapsed;
     }

    public onInteraction(event) {
        const expandedPanels = this.expansionPanels.filter((panel) => !panel.collapsed);
        expandedPanels.forEach((expandedPanel) => {
            if (expandedPanel.elementRef !==  event.event.currentTarget) {
                expandedPanel.collapse();
            }
        });
    }
}
