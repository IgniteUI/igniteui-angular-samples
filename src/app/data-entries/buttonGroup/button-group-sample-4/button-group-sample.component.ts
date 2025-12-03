import { Component } from '@angular/core';
import { IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
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
