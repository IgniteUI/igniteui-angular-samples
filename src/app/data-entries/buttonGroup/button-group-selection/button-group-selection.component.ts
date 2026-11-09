import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

type SelectionMode = 'single' | 'singleRequired' | 'multi';

@Component({
    selector: 'app-button-group-selection',
    styleUrls: ['./button-group-selection.component.scss'],
    templateUrl: './button-group-selection.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupSelectionComponent {
    public rippleColor = 'gray';

    public selectionModes: { label: string; value: SelectionMode }[] = [
        { label: 'Single', value: 'single' },
        { label: 'Single-Required', value: 'singleRequired' },
        { label: 'Multi', value: 'multi' }
    ];

    public isBoldSelected(mode: SelectionMode) {
        return mode === 'singleRequired' || mode === 'multi';
    }

    public isItalicSelected(mode: SelectionMode) {
        return mode === 'multi';
    }
}
