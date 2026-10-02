import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxRadioComponent, IgxRadioGroupDirective, RadioGroupAlignment } from 'igniteui-angular/radio';
import {
  IgxExpansionPanelBodyComponent,
  IgxExpansionPanelComponent,
  IgxExpansionPanelHeaderComponent,
  IgxExpansionPanelIconDirective,
  IgxExpansionPanelTitleDirective
} from 'igniteui-angular/expansion-panel';

@Component({
  selector: 'app-switch-styling',
  styleUrls: ['./switch-styling.component.scss'],
  templateUrl: './switch-styling.component.html',
  imports: [
    IgxSwitchComponent,
    IgxRadioComponent,
    IgxRadioGroupDirective,
    IgxExpansionPanelComponent,
    IgxExpansionPanelHeaderComponent,
    IgxExpansionPanelTitleDirective,
    IgxExpansionPanelIconDirective,
    IgxExpansionPanelBodyComponent,
    FormsModule
  ]
})
export class SwitchStylingComponent {
  public alignment = RadioGroupAlignment.vertical;
  public method = 'app';
}
