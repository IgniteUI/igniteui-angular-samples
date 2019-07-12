import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxToggleDirective, IgxDragDirective, OverlaySettings, GlobalPositionStrategy, NoOpScrollStrategy } from 'igniteui-angular';

@Component({
  selector: 'drag-dialog-sample',
  templateUrl: './drag-dialog-sample.component.html',
  styleUrls: ['./drag-dialog-sample.component.scss']
})
export class DragDialogSampleComponent implements OnInit {
    public toggleStartPageX;
    public toggleStartPageY;
    private overlaySettings: OverlaySettings = {
        positionStrategy: new GlobalPositionStrategy(),
        scrollStrategy: new NoOpScrollStrategy(),
        modal: false,
        closeOnOutsideClick: true
    };
  @ViewChild('toggleForm', { static: true })
  public toggleForm: IgxToggleDirective;

  @ViewChild('toggleForm', { read: IgxDragDirective, static: true })
  public toggleFormDrag: IgxDragDirective;
  constructor() { }

  ngOnInit() {
  }

  public openDialog() {
    this.toggleForm.open(this.overlaySettings);

    if (!this.toggleStartPageX && !this.toggleStartPageY) {
        this.toggleStartPageX = this.toggleFormDrag.pageX;
        this.toggleStartPageY = this.toggleFormDrag.pageY;
    }
    this.toggleFormDrag.setPageXY(this.toggleStartPageX, this.toggleStartPageY);
}
}
