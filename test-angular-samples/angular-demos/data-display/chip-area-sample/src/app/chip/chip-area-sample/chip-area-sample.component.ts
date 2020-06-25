import { Component } from "@angular/core";
import { IBaseChipEventArgs, IChipsAreaReorderEventArgs } from "igniteui-angular";

@Component({
    selector: "app-chip-area-sample",
    styleUrls: ["./chip-area-sample.component.scss"],
    templateUrl: "./chip-area-sample.component.html"
})

export class ChipAreaSampleComponent {
    public chipList = [
        {
            id: "770-504-2217",
            name: "Terrance Orta",
            photo: "https://www.infragistics.com/angular-demos/assets/images/men/27.jpg"
        },
        {
            id: "423-676-2869",
            name: "Richard Mahoney",
            photo: "https://www.infragistics.com/angular-demos/assets/images/men/13.jpg"
        },
        {
            id: "859-496-2817",
            name: "Donna Price",
            photo: "https://www.infragistics.com/angular-demos/assets/images/women/50.jpg"
        }
    ];

    private changeDetectionRef: any;

    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => {
            return item.id !== event.owner.id;
        });
        this.changeDetectionRef.detectChanges();
    }

    public chipsOrderChanged(event: IChipsAreaReorderEventArgs) {
        const newChipList = [];
        for (const chip of event.chipsArray) {
            const chipItem = this.chipList.filter((item) => {
                return item.id === chip.id;
            })[0];
            newChipList.push(chipItem);
        }
        this.chipList = newChipList;
    }
}
