import { Component, OnInit } from "@angular/core";
import { IgxScrollEvent } from "igniteui-angular/main";

class ListItem {
    constructor(
        public text: string,
        public avatar: string
    ) { }
}

@Component({
    selector: "app-scroll",
    styleUrls: ["./scroll.component.css"],
    templateUrl: "./scroll.component.html"
})
export class ScrollComponent implements OnInit {
    public items: ListItem[] = [];

    public visibleItems: ListItem[] = [];

    public visibleItemsCount = 10;

    constructor() {
        for (let j = 1, i = 0; i <= 5000; i++ , j++) {
            const imageIndex = j > 21 ? j = 1 : j;
            this.items.push(new ListItem(`User: ${i + 1}`, `assets/images/avatar/${imageIndex}.jpg`));
        }

        this.visibleItems = this.items.slice(0, 10);
    }

    public ngOnInit() {
    }

    public updateList($event: IgxScrollEvent): void {
        this.visibleItems = this.items.slice($event.currentTop, $event.currentTop + this.visibleItemsCount);
    }
}
