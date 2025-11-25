import { Component } from '@angular/core';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardContentDirective, IgxCardHeaderComponent, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxDividerDirective, IgxFlexDirective, IgxIconButtonDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
@Component({
    selector: 'app-animations-sample-2',
    styleUrls: ['./animations-sample-2.component.scss'],
    templateUrl: './animations-sample-2.component.html',
    imports: [IgxCardComponent, IgxLayoutDirective, IgxFlexDirective, IgxCardHeaderComponent, IgxCardMediaDirective, IgxCardContentDirective, IgxDividerDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent]
})
export class AnimationsSample2Component {
    public horizontal = true;
}
