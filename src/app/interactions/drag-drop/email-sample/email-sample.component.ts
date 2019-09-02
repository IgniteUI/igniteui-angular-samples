import { Component, Input, OnInit } from "@angular/core";

const DROP_ZONE_ACTIVE_COLOR = "#d8d8d8";
const DROP_ZONE_INACTIVE_COLOR = "#ebebeb";

@Component({
    selector: "app-email-sample",
    templateUrl: "./email-sample.component.html",
    styleUrls: ["./email-sample.component.scss"]
})

export class EmailSampleComponent implements OnInit {

    @Input()
    public ghostTemplate: any;
    public hasChecked: boolean = false;
    public draggedElements: number = 0;

    public folders: any[] = [
        { icon: "inbox", text: "Inbox", dropChannel: ""},
        { icon: "star_rate", text: "Starred", dropChannel: "starred"},
        { icon: "error", text: "Important", dropChannel: "important"},
        { icon: "send", text: "Sent", dropChannel: ""},
        { icon: "label", text: "Personal", dropChannel: "personal"},
        { icon: "label", text: "Work", dropChannel: "work"},
        { icon: "label", text: "Finances", dropChannel: "finances"}
    ];

    public emails: any[] = [
        { sender: "Ivan Cornejo", title: "We have exciting news", checked: false},
        { sender: "Amish Shiravadakar", title: "RE: Document Libraries status", checked: false},
        { sender: "Elsi Hansdottir", title: "SEO Keywords", checked: false},
        { sender: "Benito Noboa", title: "Last Chance: Win an Amazon Gift Card", checked: false}
    ];

    constructor() { }

    public ngOnInit() { }

    public toggleCheck(email: any, checkbox: any): void {
        this.emails.forEach(x => x.checked = false);
        email.checked = true;
        checkbox.checked = true;
    }

    public toggleCheckbox(email: any): void {
        email.checked = !email.checked;
    }

    public dropElement(event: any): void {
        const folderTitle = event.owner.element.nativeElement.querySelector(".folder-title").innerText;
        this.emails = this.emails.filter(x => x.checked !== true);
        event.dragData = {};
        event.cancel = true;
        this.leaveDropZone(event);
    }

    public enterDropZone(event: any): void {
        const folderTitle = event.owner.element.nativeElement.querySelector(".folder-title").innerText;
        event.owner.element.nativeElement.style.background = DROP_ZONE_ACTIVE_COLOR;
    }

    public leaveDropZone(event: any): void {
        event.owner.element.nativeElement.style.background = DROP_ZONE_INACTIVE_COLOR;
    }

    public onDragStart(event: any): void {
        this.aggressiveToggle(event);
        this.draggedElements = this.emails.filter(x => x.checked === true).length;
    }

    private aggressiveToggle(event: any): void {
        const checkbox = event.owner.element.nativeElement.parentElement.querySelector("igx-checkbox");
        event.owner.data.checked = true;
        if (!this.nativeCheckboxChecked(checkbox)) {
            checkbox.click();
        }
    }

    private nativeCheckboxChecked(nativeElement: any): boolean {
        return nativeElement.classList.contains("igx-checkbox--checked");
    }

}
