import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES } from 'igniteui-angular/card';
import { IgxDividerComponent, IgxFlexDirective, IgxIconButtonDirective, IgxLayoutDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
@Component({
    selector: 'app-animations-sample-2',
    styleUrls: ['./animations-sample-2.component.scss'],
    templateUrl: './animations-sample-2.component.html',
    imports: [IgxLayoutDirective, IgxFlexDirective, IgxDividerComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent, IGX_CARD_DIRECTIVES]
})
export class AnimationsSample2Component {
    public horizontal = true;
}
