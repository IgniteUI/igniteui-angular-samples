import { Component } from "@angular/core";
import { IBaseChipEventArgs } from "igniteui-angular";

@Component({
    selector: "app-chip-simple",
    styleUrls: ["./chip-simple.component.scss"],
    templateUrl: "./chip-simple.component.html"
})

export class ChipSimpleComponent {
    public chipList = [
        {
           text: "Country",
           id: "1",
           icon: "place"
        },
        {
            text: "City",
            id: "2",
            icon: "location_city"
        },
        {
            text: "Town",
            id: "3",
            icon: "store"
        },
        {
            text: "First Name",
            id: "4",
            icon: "person_pin"
        }
    ];

    private changeDetectionRef: any;

    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => {
            return item.id !== event.owner.id;
        });
        this.changeDetectionRef.detectChanges();
    }
}
