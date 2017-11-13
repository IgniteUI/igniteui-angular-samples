import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form-elements',
  templateUrl: './form-elements.component.html',
  styleUrls: ['./form-elements.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormElementsComponent implements OnInit {

  user: any;

  constructor() {
    this.user = {
        firstName: 'John',
        lastName: 'Doe',
        password: '1337s3cr3t'
    }
  }

  ngOnInit() {
  }

}
