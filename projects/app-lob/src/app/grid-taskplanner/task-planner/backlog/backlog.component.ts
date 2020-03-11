import {Component, ViewChild} from "@angular/core";
import {IgxInputDirective} from "igniteui-angular";
import {TASKS_DATA} from "../../../services/tasksData";

@Component({
    selector: "app-backlog",
    templateUrl: "./backlog.component.html",
    styleUrls: ["./backlog.component.scss"],
    host: {class: "tp-app__backlog"}
})
export class BacklogComponent  {
    public issues = TASKS_DATA;

    @ViewChild("taskSearch", { read: IgxInputDirective, static: true }) public searchInput: IgxInputDirective;

    constructor() {}

    public clearSearchInput() {
        this.searchInput.value = "";
    }
}
