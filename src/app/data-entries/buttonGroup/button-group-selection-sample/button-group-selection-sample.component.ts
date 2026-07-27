import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-button-group-selection-sample',
    styleUrls: ['./button-group-selection-sample.component.scss'],
    templateUrl: './button-group-selection-sample.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxRadioComponent, FormsModule, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupSelectionSampleComponent {
    public rippleColor = 'grey';
    public selectionMode: 'single' | 'singleRequired' | 'multi' = 'single';
}
