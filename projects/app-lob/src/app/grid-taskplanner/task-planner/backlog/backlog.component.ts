import {Component, OnInit} from "@angular/core";
import {TASKS_DATA} from "../../../services/tasksData";

@Component({
    selector: "app-backlog",
    templateUrl: "./backlog.component.html",
    styleUrls: ["./backlog.component.scss"],
    host: {class: "tp-app__backlog"}
})
export class BacklogComponent implements OnInit {
    public issues = TASKS_DATA;

    constructor() {
    }

    public ngOnInit(): void {
    }

}
