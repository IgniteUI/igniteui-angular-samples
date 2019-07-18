import { Component, Renderer2 } from "@angular/core";
import { IgxDropEventArgs } from "igniteui-angular";
enum state {
    ToDo = "To Do",
    InProgress = "In Progress",
    Done = "Done"
}
@Component({
    selector: "app-kanban-sample",
    templateUrl: "./kanban-sample.component.html",
    styleUrls: ["./kanban-sample.component.scss"]
})
export class KanbanSampleComponent {
    public toDoList = [
        { id: "STR-000132", text: "Implement chat bubble", state: state.ToDo },
        { id: "STR-000097", text: "Implement sticky header", state: state.ToDo },
        { id: "STR-000191", text: "Change trial days to credit", state: state.ToDo },
        { id: "STR-000121", text: "Add analytics", state: state.ToDo }
    ];
    public inProgressList = [
        { id: "STR-000124", text: "Implement fback widget", state: state.InProgress }
    ];
    public doneList = [
        { id: "STR-000129", text: "Add SSL to account pages", state: state.Done }
    ];

    constructor(private renderer: Renderer2) { }

    public onStateContainerEnter(event: IgxDropEventArgs) {
        this.renderer.setStyle(event.owner.element.nativeElement, "background-color", "#A7D8F9");
    }

    public onStateContainerLeave(event: IgxDropEventArgs) {
        this.renderer.setStyle(event.owner.element.nativeElement, "background-color", "white");
    }
}
