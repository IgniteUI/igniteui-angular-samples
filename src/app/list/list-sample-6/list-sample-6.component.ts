import { Component, ViewChild } from "@angular/core";
import { IgxListComponent } from 'igniteui-angular';

@Component({
  selector: "app-list-sample-6",
  styleUrls: ["./list-sample-6.component.scss"],
  templateUrl: "./list-sample-6.component.html"
})
export class ListSample6Component {

    @ViewChild('fruitList')
    fruitList: IgxListComponent;

    fruitsData: string[] = [];

    constructor() { }

    loadFruits() {
        this.fruitList.isLoading = true;
        setTimeout(() => {
            let availableFruits: string[] = ['banana', 'orange', 'apple', 'strawberry', 'pear'];
            availableFruits.forEach((fruit) => { this.fruitsData.push(fruit); });
            this.fruitList.isLoading = false;
        }, 1000);
    }

}
