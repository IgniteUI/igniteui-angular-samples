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
    private lastDragEnterList: string = "";
    private currentList = "";
    public dummyObj = null;
    
    @ViewChild("toDo", {static: false})
    private toDo: ElementRef;
    
    @ViewChild("inProgress", {static: false})
    private inProgress: ElementRef;
    
    @ViewChild("done", {static: false})
    private done: ElementRef;

    constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) { }

    onStateContainerEnter(event: IgxDropEventArgs) {
        // if we have entered another list container, we have to remove the "dummy" object from the previous one
        if (this.currentList !== event.owner.element.nativeElement.id) {
            this[this.currentList] = this[this.currentList].filter((item) => {
                return item.id !== "dummy"
            })
            this.cdr.detectChanges();
            this.currentList = event.owner.element.nativeElement.id;
            this.dummyObj = null;
        };
        // Add the blue container hightlight when an item starts being dragged
        this.renderer.addClass(event.owner.element.nativeElement, "dragHovered");
    }

    onStateContainerLeave(event: IgxDropEventArgs) {
        // This event also gets raised when the user drags a task over another task tile.
        // That means we have to re-apply the "dragHovered" class in the `onItemEnter` event handler
        this.renderer.removeClass(event.owner.element.nativeElement,  "dragHovered");
    }
    dragStartHandler(event) {
        // we have to save the dragStartList so we could remove the dragged item from it later, when it gets dropped
        this.currentList = event.owner.element.nativeElement.dataset.state + "List";
        this.lastDragEnterList = this.currentList;
        this.dragObj = this[this.currentList].filter((elem) => {
            return elem.id === event.owner.element.nativeElement.id
        })[0];
    };

    private swapTiles(currentIndex: number, targetIndex: number, itemList: string): void {
        const tempObj = this[itemList][currentIndex];
        this[itemList].splice(currentIndex, 1);
        this[itemList].splice(targetIndex, 0, tempObj);
        this.cdr.detectChanges();
    }

    onItemEnter(event) {
        // applying the container highlighting again
        const listContainer = event.owner.element.nativeElement.dataset.state;
        this.renderer.addClass(this[listContainer].nativeElement, "dragHovered");
        
        const currentList = event.owner.element.nativeElement.dataset.state + "List";
        const currentItemIndex = this[currentList].findIndex((item) => {
            return item.id === event.owner.element.nativeElement.id;
        });
        // checking if items in the same list are being reordered
        if (this.lastDragEnterList === currentList) {
            const draggedItemIndex = this[currentList].findIndex((item) => {
                return item.id === this.dragObj.id;
            });
            this.swapTiles(draggedItemIndex, currentItemIndex, currentList);
        } else {
            // we need a dummy object that would be hidden and would make an empty space for the dragged element in the list
            if(!this.dummyObj) {
                this.dummyObj = {id: "dummy", text: "", state: event.owner.element.nativeElement.dataset.state};
                const newCurrentList = [...this[currentList].slice(0, currentItemIndex),
                                            this.dummyObj,
                                        ...this[currentList].slice(currentItemIndex)];
                this[currentList] = newCurrentList;
                this.cdr.detectChanges();
            } else {
                const dummyObjIndex = this[currentList].findIndex((item) => {
                    return item.id === 'dummy';
                });
                this.swapTiles(dummyObjIndex, currentItemIndex, currentList);
            }
        }
    };
    onItemLeave(event) {
        const listContainer = event.owner.element.nativeElement.dataset.state;
        this.renderer.removeClass(this[listContainer].nativeElement, "dragHovered");
    }

    onItemDropped(event) {
        //when the tile is dropped, it should be removed from dragStartList and added to the current "drop" list
        this.dragObj = null;
        event.cancel = true;
        event.drag.dropFinished();
    }
}
