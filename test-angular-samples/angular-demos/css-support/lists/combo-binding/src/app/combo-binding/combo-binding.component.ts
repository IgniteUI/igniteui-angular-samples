import { Component, ViewChild } from "@angular/core";
import { IComboSelectionChangeEventArgs, IgxComboComponent } from "igniteui-angular";
import { CITIES, ICity } from "./cities";

@Component({
    selector: "app-combo-binding",
    templateUrl: "combo-binding.component.html",
    styleUrls: ["combo-binding.component.css"]
})
export class ComboBindingComponent {
    @ViewChild("withValueKey", { read: IgxComboComponent })
    public comboValueKey: IgxComboComponent;
    @ViewChild("noValueKey", { read: IgxComboComponent })
    public comboNoValueKey: IgxComboComponent;

    public cities: ICity[] = CITIES;
    public selectedValueKey: string[] = ["UK01", "BG01"];
    public selectedNoValueKey: ICity[] = [this.cities[4], this.cities[0]];

    public handleSelectionChange(event: IComboSelectionChangeEventArgs) {
        console.log(event);
    }

    public selectFavorites(valueKey: boolean) {
        if (valueKey) {
            this.comboValueKey.selectItems(["UK01", "BG01", "DE01", "JP01"]);
        } else {
            const selectedItems: ICity[] = this.cities.filter((e: ICity) => {
                return ["UK01", "BG01", "DE01", "JP01"].indexOf(e.id) > -1;
            });
            this.comboNoValueKey.selectItems(selectedItems);
        }
    }
}
