import { Component, ElementRef, ViewChild } from "@angular/core";
import {
    ConnectedPositioningStrategy,
    GlobalPositionStrategy,
    IgxDragDirective,
    IgxOverlayService,
    IgxToggleDirective,
    NoOpScrollStrategy,
    OverlaySettings } from "igniteui-angular";

@Component({
  selector: "drag-dialog-sample",
  templateUrl: "./drag-dialog-sample.component.html",
  styleUrls: ["./drag-dialog-sample.component.scss"]
})
export class DragDialogSampleComponent {
  public toggleStartPageX;
  public toggleStartPageY;
  @ViewChild("toggleForm", { static: true })
  public toggleForm: IgxToggleDirective;

  @ViewChild("toggleFormDiv", {static: true})
  public toggleFormDiv: ElementRef;

  @ViewChild("toggleForm", { read: IgxDragDirective, static: true })
  public toggleFormDrag: IgxDragDirective;

  @ViewChild("dialogButton", { static: true })
  public buttonElement: ElementRef;

  private overlaySettings: OverlaySettings = {
    positionStrategy: new GlobalPositionStrategy(),
    scrollStrategy: new NoOpScrollStrategy(),
    modal: false,
    closeOnOutsideClick: true
};

  constructor(private overlayService: IgxOverlayService) {}

  public openDialog() {
    const overlayId = this.overlayService.attach(this.toggleFormDiv, {
        positionStrategy: new ConnectedPositioningStrategy({
            target: this.buttonElement.nativeElement
        })
    });
    this.overlayService.show(overlayId);
    this.toggleForm.open(this.overlaySettings);
    if (!this.toggleStartPageX && !this.toggleStartPageY) {
        this.toggleStartPageX = this.toggleFormDrag.pageX;
        this.toggleStartPageY = this.toggleFormDrag.pageY;
    }
    this.toggleFormDrag.setPageXY(this.toggleStartPageX, this.toggleStartPageY);
  }
}
