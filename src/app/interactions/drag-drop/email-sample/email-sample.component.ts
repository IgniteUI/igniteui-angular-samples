import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-email-sample",
    templateUrl: "./email-sample.component.html",
    styleUrls: ["./email-sample.component.scss"]
})

export class EmailSampleComponent implements OnInit {

    @Input() ghostTemplate: any;
    public hasChecked: boolean = false;

    public folders: any[] = [
        { icon: "inbox", text: "Inbox"},
        { icon: "star_rate", text: "Starred"},
        { icon: "error", text: "Important"},
        { icon: "send", text: "Sent"},
        { icon: "label", text: "Personal"},
        { icon: "label", text: "Work"},
        { icon: "label", text: "Finances"},
    ]
    public emails: any[] = [
        { sender: "Ivan Cornejo", title: "We have exciting news", checked: false},
        { sender: "Amish Shiravadakar", title: "RE: Document Libraries status", checked: false},
        { sender: "Elsi Hansdottir", title: "SEO Keywords", checked: false},
        { sender: "Benito Noboa", title: "Last Chance: Win an Amazon Gift Card", checked: false}
    ]

    constructor() { }

    public ngOnInit() { }

    public toggleCheck(email: any, checkbox: any): void {
        if (email.checked || this.hasChecked !== true) {
            email.checked = !email.checked;
            checkbox.toggle();
            this.hasChecked = false;
            this.emails.forEach(x => {
                if (x.checked === true) {
                    this.hasChecked = true;
                }
            });
        }
    }

    public dropElement(event: any): void {
        if (event.dragData.checked === true) {
            this.hasChecked = false;
            this.emails = this.emails.filter(x=>x.sender!=event.dragData.sender);
            this.leaveDropZone(event);
        } else {
            // event.drag.animateToOrigin();
            event.cancel = true;
        }
    }

    public enterDropZone(event: any): void {
        event.owner.element.nativeElement.style.background = "#d8d8d8";
    }

    public leaveDropZone(event: any): void {
        event.owner.element.nativeElement.style.background = "#ebebeb";
    }

}
