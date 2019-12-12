import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxButtonGroupComponent, IgxSelectComponent } from "igniteui-angular";

@Component({
    selector: "select-header-footer",
    styleUrls: ["select-header-footer.component.scss"],
    templateUrl: "select-header-footer.component.html"
})
export class SelectHeaderFooterComponent implements OnInit {
    @ViewChild(IgxSelectComponent) public select: IgxSelectComponent;
    @ViewChild(IgxButtonGroupComponent) public buttons: IgxButtonGroupComponent;

    public flightCount: number;
    public trainCount: number;
    public boatCount: number;
    public selected: string;
    public fruitsDS: Array<{ type: string, delivery: string }>;

    public filteredFlight2: any;
    public filteredFlight3: any;

    // TODO add interface for Fruit/Vegetable
    // TODO extend data source
    public fruits: Array<{ type: string, delivery: string }> = [
            { type: "Apple", delivery: "boat" },
            { type: "Orange", delivery: "boat" },
            { type: "Cherry", delivery: "boat"},
            { type: "Banana", delivery: "airplane"},
            { type: "Pineapple", delivery: "airplane"},
            { type: "Melon", delivery: "airplane"},
            { type: "Pear", delivery: "train"},
            { type: "Watermelon", delivery: "train"},
            { type: "Grape", delivery: "train"},
            { type: "Pomegranate", delivery: "train"}
        ];

    constructor(public cdr: ChangeDetectorRef) {

    }

    public ngOnInit() {
        this.flightCount = this.fruits.filter(items => items.delivery === "airplane").length;
        this.trainCount = this.fruits.filter(items => items.delivery === "train").length;
        this.boatCount = this.fruits.filter(items => items.delivery === "boat").length;
        this.fruitsDS = this.fruits;
    }

    public filterFlight() {
        this.fruitsDS = this.fruits.filter(fruit => fruit.delivery === "airplane");
        this.selected = "airplane";
        this.cdr.detectChanges();
    }

    public filterTrain() {
        this.fruitsDS = this.fruits.filter(fruit => fruit.delivery === "train");
        this.selected = "train";
        this.cdr.detectChanges();
    }

    public filterBoat() {
        this.fruitsDS = this.fruits.filter(fruit => fruit.delivery === "boat");
        this.selected = "boat";
        this.cdr.detectChanges();
    }
}
