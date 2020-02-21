import { AfterViewInit, Directive, HostListener, QueryList, ViewChildren } from "@angular/core";
import { IgxInputGroupComponent } from "igniteui-angular";

@Directive({
    selector: "input-group-sample-base"
})
export class BaseInputGroupSampleComponent {

    public type = null;
    @ViewChildren(IgxInputGroupComponent) public inputGroups: QueryList<IgxInputGroupComponent>;

    @HostListener("window:message", ["$event"])
    private onMessage(e: MessageEvent) {
        const themeName: string = e.data.themeName;
        if (themeName) {
            this.applyInputTypeForTheme(themeName);
        }
    }

    private applyInputTypeForTheme(theme: string) {
        const themeName = theme.split("-")[1];
        switch (themeName) {
            case "theme": this.setInputType("line"); break;
            case "fluent": this.setInputType("fluent"); break;
            case "bootstrap": this.setInputType("bootstrap"); break;
            default: break;
        }
    }

    private setInputType(type: string) {
        if (this.inputGroups && this.inputGroups.length > 0) {
            this.inputGroups.forEach(x => {
                    if (!(x.isBox || x.isBorder || x.isSearch)) {
                        x.type = type;
                    }
                });
        }
    }
}
