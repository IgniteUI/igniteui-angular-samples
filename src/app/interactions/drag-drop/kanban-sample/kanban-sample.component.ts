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
        { id: "STR-000191", text: "Change trial days to credit", state: state.ToDo }

    ];
    public inProgressList = [
        { id: "STR-000124", text: "Implement fback widget", state: state.InProgress },
        { id: "STR-000121", text: "Add analytics", state: state.InProgress }
    ];
    public doneList = [
        { id: "STR-000129", text: "Add SSL to account pages", state: state.Done }
    ];
    public tempObj;
    public lastEnteredList;

    constructor(private renderer: Renderer2) { }

    public onStateContainerEnter(event: IgxDropEventArgs) {
        //console.log(event.owner.element.nativeElement)
        this.renderer.addClass(event.owner.element.nativeElement, "dragHovered");
    }

    public onStateContainerLeave(event: IgxDropEventArgs) {
        //console.log(event.owner.element.nativeElement)
        this.renderer.removeClass(event.owner.element.nativeElement,  "dragHovered");
    }
    public dragStartHandler(event) {
        //this.renderer.setStyle(event.owner.element.nativeElement, "display", "none");
        this.tempObj = this.toDoList.filter((elem) => { return elem.id === event.owner.element.nativeElement.id })[0]
        console.log(this.tempObj)   
        this.toDoList = this.toDoList.filter((elem) => { return elem.id !== event.owner.element.nativeElement.id});
        console.log(this.toDoList)
    } 
}
