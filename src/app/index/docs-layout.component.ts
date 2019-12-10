import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject, OnInit } from "@angular/core";

@Component({
    selector: "app-docs-layout",
    styleUrls: ["./docs-layout.component.scss"],
    template: `<router-outlet></router-outlet>`
})

export class DocsLayoutComponent implements OnInit {

    private styleElem: HTMLStyleElement;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    public ngOnInit() {
        this.createThemeStyle();
    }

    @HostListener("window:message", ["$event"])
    private onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin && typeof e.data.themeStyle === "string") {
            this.styleElem.textContent = e.data.themeStyle;
        }
    }

    private createThemeStyle() {
        this.styleElem = document.createElement("style");
        this.styleElem.id = "igniteui-theme";
        document.head.insertBefore(this.styleElem, this.document.head.lastElementChild);
    }
}
