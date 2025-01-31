
import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-icon-button-overview',
    styleUrls: ['./icon-button-overview.component.scss'],
    templateUrl: './icon-button-overview.component.html',
    imports: [IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class IconButtonOverviewComponent { }
