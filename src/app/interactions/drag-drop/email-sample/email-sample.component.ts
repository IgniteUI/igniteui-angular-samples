import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-email-sample",
    templateUrl: "./email-sample.component.html",
    styleUrls: ["./email-sample.component.scss"]
})

export class EmailSampleComponent implements OnInit {

    @Input() ghostTemplate: any;

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

    public ngOnInit() {

    }

    public toggleCheck(email: any): void {
        email.checked = !email.checked;
    }

    public dropElement(event: any): void {
        this.emails = this.emails.filter(x=>x.sender!=event.dragData.sender);
        this.leaveDropZone(event);
    }

    public enterDropZone(event: any): void {
        event.owner.element.nativeElement.style.background = "#d8d8d8";
    }

    public leaveDropZone(event: any): void {
        event.owner.element.nativeElement.style.background = "#ebebeb";
    }

}
