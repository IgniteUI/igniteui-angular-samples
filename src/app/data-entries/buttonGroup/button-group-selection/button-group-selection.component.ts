import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-button-group-selection',
    styleUrls: ['./button-group-selection.component.scss'],
    templateUrl: './button-group-selection.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxRadioComponent, FormsModule, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupSelectionComponent {
    public rippleColor = 'grey';
    public selectionMode: 'single' | 'singleRequired' | 'multi' = 'single';
}
