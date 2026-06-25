import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { THEME_TOKEN, ThemeToken } from 'igniteui-angular/core';

@Component({
  selector: 'app-checkbox-styling',
  styleUrls: ['./checkbox-styling.component.scss'],
  templateUrl: './checkbox-styling.component.html',
  providers: [{ provide: THEME_TOKEN, useFactory: () => new ThemeToken('fluent') }],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [IgxCheckboxComponent]
})
export class CheckboxStylingComponent {
}
