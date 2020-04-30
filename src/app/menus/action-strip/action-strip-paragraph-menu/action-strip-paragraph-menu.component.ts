import { Component, ViewChild } from "@angular/core";
import { DisplayDensity, IgxActionStripComponent } from "igniteui-angular";

@Component({
  selector: "app-action-strip-paragraph-menu",
  styleUrls: ["./action-strip-paragraph-menu.component.scss"],
  templateUrl: "./action-strip-paragraph-menu.component.html"
})
export class ActionStripParagraphMenuComponent {
    @ViewChild("actionstrip") public actionStrip: IgxActionStripComponent;
    @ViewChild("myParagraph") public paragraph;
    public result: string;
    public isVisible = false;
    public textLeft = false;
    public textCenter = false;
    public textRight = false;
    public displayDensity = DisplayDensity.comfortable;

    public onMouseLeave(event?) {
        if (!event || event.relatedTarget.nodeName.toLowerCase() !== "igx-drop-down-item") {
            this.hideActions();
        }
    }

    public alignTextLeft() {
        this.paragraph.nativeElement.classList.add("text-align-left");
        this.paragraph.nativeElement.classList.remove("text-align-center");
        this.paragraph.nativeElement.classList.remove("text-align-right");
    }

    public alignTextCenter() {
        this.paragraph.nativeElement.classList.remove("text-align-left");
        this.paragraph.nativeElement.classList.add("text-align-center");
        this.paragraph.nativeElement.classList.remove("text-align-right");
    }

    public alignTextRight() {
        this.paragraph.nativeElement.classList.remove("text-align-left");
        this.paragraph.nativeElement.classList.remove("text-align-center");
        this.paragraph.nativeElement.classList.add("text-align-right");
    }

    public showActions() {
        this.isVisible = true;
    }

    public hideActions() {
        this.isVisible = false;
    }
}
