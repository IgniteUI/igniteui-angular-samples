import { Component,  } from '@angular/core';
import { InteractionMode } from 'igniteui-angular';

@Component({
  selector: 'app-timepicker-dropdown-sample',
  templateUrl: './timepicker-dropdown-sample.component.html',
  styleUrls: ['./timepicker-dropdown-sample.component.scss']
})
export class TimepickerDropdownSampleComponent {
  
  public mode: InteractionMode = InteractionMode.dropdown;
  public format: string = 'hh:mm tt';
  public date: Date = new Date(2018, 10, 27, 17, 45, 0, 0);

  constructor() { }

}
