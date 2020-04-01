import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
    @Output() public messageToEmit = new EventEmitter<any>();
    constructor() { }

    public ngOnInit(): void {
    }

    public openCreateTaskDialog() {
        this.messageToEmit.emit();
    }
}
