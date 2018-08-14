import { Component, HostListener } from "@angular/core";

@Component({
    selector: "app-docs-layout",
    styleUrls: ["./docs-layout.component.scss"],
    template: `
        <div [class]="theme"><router-outlet></router-outlet></div>
    `
})
export class DocsLayoutComponent {
    public theme = "default-theme";

    @HostListener("window:message", ["$event"])
    private onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin) {
            this.theme = e.data.theme;
        }
    }
}
