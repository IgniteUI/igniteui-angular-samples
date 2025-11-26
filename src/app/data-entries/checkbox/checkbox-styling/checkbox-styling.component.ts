import { Component } from '@angular/core';
import { IgxCheckboxComponent, THEME_TOKEN, ThemeToken } from 'igniteui-angular';

@Component({
  selector: 'app-checkbox-styling',
  styleUrls: ['./checkbox-styling.component.scss'],
  templateUrl: './checkbox-styling.component.html',
  providers: [{ provide: THEME_TOKEN, useFactory: () => new ThemeToken('fluent') }],
  imports: [IgxCheckboxComponent]
})
export class CheckboxStylingComponent {
}
