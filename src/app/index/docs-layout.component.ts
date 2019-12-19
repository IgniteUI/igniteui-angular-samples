import { DOCUMENT } from "@angular/common";
import { Component, HostListener, Inject, OnInit } from "@angular/core";

@Component({
    selector: "app-docs-layout",
    styleUrls: ["./docs-layout.component.scss"],
    template: `<router-outlet></router-outlet>`
})

export class DocsLayoutComponent implements OnInit {
    private isIE = !((window as any).ActiveXObject) && "ActiveXObject" in window;
    private theme = "default-theme";
    private styleElem: HTMLStyleElement;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    public ngOnInit() {
        this.createThemeStyle();
    }

    @HostListener("window:message", ["$event"])
    private onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin && typeof e.data.themeStyle === "string") {
            this.styleElem.textContent = e.data.themeStyle;
        } else if (e.origin === e.data.origin && typeof e.data.theme === "string") {
            this.document.body.classList.remove(this.theme);
            this.document.body.classList.add(e.data.theme);
            this.theme = e.data.theme;
        }
    }

    private createThemeStyle() {
        if (this.isIE) {
            this.document.body.classList.add(this.theme);
        } else {
            this.styleElem = document.createElement("style");
            this.styleElem.id = "igniteui-theme";
            document.head.insertBefore(this.styleElem, this.document.head.lastElementChild);
        }
    }
}
