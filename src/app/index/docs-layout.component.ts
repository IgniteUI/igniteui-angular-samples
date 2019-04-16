import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject, OnInit } from "@angular/core";

@Component({
    selector: "app-docs-layout",
    styleUrls: ["./docs-layout.component.scss"],
    template: `<router-outlet></router-outlet>`
})

export class DocsLayoutComponent implements OnInit {
    private theme = "default-theme";
    constructor(@Inject(DOCUMENT) private document: Document) {}

    public ngOnInit() {
        this.document.body.classList.add(this.theme);
    }

    @HostListener("window:message", ["$event"])
    private onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin) {
            this.document.body.classList.remove(this.theme);
            this.document.body.classList.add(e.data.theme);
            this.theme = e.data.theme;
        }
    }
}
