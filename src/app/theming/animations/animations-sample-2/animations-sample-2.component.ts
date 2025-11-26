import { Component } from '@angular/core';
import { IgxCardComponent, IgxLayoutDirective, IgxFlexDirective, IgxCardHeaderComponent, IgxCardMediaDirective, IgxCardContentDirective, IgxDividerDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent } from 'igniteui-angular';
@Component({
    selector: 'app-animations-sample-2',
    styleUrls: ['./animations-sample-2.component.scss'],
    templateUrl: './animations-sample-2.component.html',
    imports: [IgxCardComponent, IgxLayoutDirective, IgxFlexDirective, IgxCardHeaderComponent, IgxCardMediaDirective, IgxCardContentDirective, IgxDividerDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent]
})
export class AnimationsSample2Component {
    public horizontal = true;
}
