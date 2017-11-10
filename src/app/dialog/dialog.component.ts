import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

  constructor() { }

  public onDialogOKSelected(event) {
    event.dialog.close();
  }
  ngOnInit() {
  }

}
