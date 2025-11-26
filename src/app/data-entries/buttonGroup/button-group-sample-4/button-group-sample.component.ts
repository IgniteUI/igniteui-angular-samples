import { Component } from '@angular/core';
import { IgxRadioComponent, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-button-group-sample',
    styleUrls: ['./button-group-sample.component.scss'],
    templateUrl: './button-group-sample.component.html',
    imports: [IgxRadioComponent, FormsModule, IgxButtonGroupComponent, IgxButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class ButtonGroupSampleComponent {
    public rippleColor = 'grey';
    public selectionMode: 'single' | 'singleRequired' | 'multi' = 'single';
}
