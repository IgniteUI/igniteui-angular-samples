import { Component, Renderer2, ViewChild, ElementRef, ChangeDetectorRef } from "@angular/core";
import { IgxDropEventArgs } from "igniteui-angular";
enum state {
    toDo = "toDo",
    inProgress = "inProgress",
    done = "done"
}
@Component({
    selector: "app-kanban-sample",
    templateUrl: "./kanban-sample.component.html",
    styleUrls: ["./kanban-sample.component.scss"]
})
export class KanbanSampleComponent {
    public toDoList: Object[] = [
        { id: "STR-000132", text: "Implement chat bubble", state: state.toDo },
        { id: "STR-000097", text: "Implement sticky header", state: state.toDo },
        { id: "STR-000191", text: "Change trial days to credit", state: state.toDo }

    ];
    public inProgressList = [
        { id: "STR-000124", text: "Implement fback widget", state: state.inProgress },
        { id: "STR-000121", text: "Add analytics", state: state.inProgress }
    ];
    public doneList = [
        { id: "STR-000129", text: "Add SSL to account pages", state: state.done }
    ];
    private dragObj = null;
    private dragStartList: string = "";
    public dummyObj = null;
    
    @ViewChild("toDo", {static: false})
    private toDo: ElementRef;
    
    @ViewChild("inProgress", {static: false})
    private inProgress: ElementRef;

    constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

    onStateContainerEnter(event: IgxDropEventArgs) {
        // Add the blue container hightlight when an item starts being dragged
        this.renderer.addClass(event.owner.element.nativeElement, "dragHovered");
    }

    onStateContainerLeave(event: IgxDropEventArgs) {
        // This event gets raised when the user drags a task over another task tile as well.
        // That menas we have to re-apply the "dragHovered" class in the `onItemEnter` event handler
        this.renderer.removeClass(event.owner.element.nativeElement,  "dragHovered");
    }
    dragStartHandler(event) {
        // we have to save the dragStartList so we could remove the dragged item from it later, when it gets dropped
        const currentList = event.owner.element.nativeElement.dataset.state + "List";
        this.dragStartList = currentList;
        this.dragObj = this[currentList].filter((elem) => { return elem.id === event.owner.element.nativeElement.id })[0];
    };

    private swapTiles(currentIndex: number, targetIndex: number, itemList: string): void {
        const tempObj = this[itemList][currentIndex];
        this[itemList].splice(currentIndex, 1);
        this[itemList].splice(targetIndex, 0, tempObj);
    }
    onItemEnter(event) {
        // applying the container highlighting again
        const listContainer = event.owner.element.nativeElement.dataset.state;
        this.renderer.addClass(this[listContainer].nativeElement, "dragHovered");
        const currentList = event.owner.element.nativeElement.dataset.state + "List";
        // checking if the entered item is in the same list as the one being dragged
        if (this.dragStartList === listContainer + "List") {
            const draggedItemIndex = this[this.dragStartList].findIndex((item) => {
                return item.id === this.dragObj.id;
            });
            const currentItemIndex = this[currentList].findIndex((item) => {
                return item.id === event.owner.element.nativeElement.id;
            });
            this.swapTiles(draggedItemIndex, currentItemIndex, this.dragStartList);
        } else {
            // const draggedItemIndex = this[this.dragStartList].findIndex((item) => {
            //     return item.id === this.dragObj.id;
            // });
            if(!this.dummyObj) {
                const currentItemIndex = this[currentList].findIndex((item) => {
                    return item.id === event.owner.element.nativeElement.id;
                });
                this.dummyObj = {id: "dummy", text: "", state: event.owner.element.nativeElement.dataset.state};
                const newCurrentList = [...this[currentList].slice(0, currentItemIndex), this.dummyObj, ...this[currentList].slice(currentItemIndex)]
                this[currentList] = newCurrentList;
                console.log(this[currentList]);
                this.cdr.detectChanges();
            }
            //this.swapTiles(draggedItemIndex, dropItemIndex, this.dragStartList);
        }
    };
    onItemLeave(event) {
        const listContainer = event.owner.element.nativeElement.dataset.state;
        this.renderer.removeClass(this[listContainer].nativeElement, "dragHovered");
    }

    onItemDropped(event) {
        //when the tile is dropped, it should be removed from dragStartList and added to the current "drop" list
        // let currentList = this.findCurrentList(event.owner.element.nativeElement.dataset.state);
        // this.dragObj.state = event.owner.element.nativeElement.dataset.state;
        // this[currentList].push(this.dragObj);
        this.dragObj = null;
        event.cancel = true;
        event.drag.dropFinished();
    }
}
