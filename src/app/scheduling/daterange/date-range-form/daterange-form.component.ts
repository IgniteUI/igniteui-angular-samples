import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daterange-sample',
  styleUrls: ['./daterange-form.component.scss'],
  templateUrl: './daterange-form.component.html'
})
export class DateRangeFormComponent implements OnInit {
  public twoInputForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  public ngOnInit(): void {
    this.twoInputForm = this.fb.group({
      departureAirport: [''],
      arrivalAirport: [''],
      flyOutDate: [''],
      flyBackDate: ['']
    });
  }

  public submitTwoInputForm(): void {
    console.log(this.twoInputForm);
  }
}
