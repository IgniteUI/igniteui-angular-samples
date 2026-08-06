import { Component } from '@angular/core';
import { Card } from '../card.blueprint';
import { IgxCardActionsComponent, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective, IgxCardMediaDirective } from 'igniteui-angular/card';
import { IgxDividerDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: 'app-igx-card-simple',
    styleUrls: ['./card-sample-1.component.scss'],
    templateUrl: './card-sample-1.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardMediaDirective, IgxDividerDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent]
})
export class CardSample1Component {
    public card = new Card({
        icons: ['skip_previous', 'play_arrow', 'skip_next'],
        imageUrl: 'assets/images/card/media/ROZES-Under-the-Grave.jpg',
        subtitle: 'Under the Grave (2016)',
        title: 'Rozes'
    });
}
