import { Component } from '@angular/core';
import { Card } from '../card.blueprint';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardMediaDirective, IgxDividerDirective, IgxCardActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent } from 'igniteui-angular';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-igx-card-simple',
    styleUrls: ['./card-sample-1.component.scss'],
    templateUrl: './card-sample-1.component.html',
    imports: [IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective, IgxCardMediaDirective, IgxDividerDirective, IgxCardActionsComponent, NgFor, IgxIconButtonDirective, IgxRippleDirective, IgxSuffixDirective, IgxIconComponent]
})
export class CardSample1Component {
    public card = new Card({
        icons: ['skip_previous', 'play_arrow', 'skip_next'],
        imageUrl: 'assets/images/card/media/ROZES-Under-the-Grave.jpg',
        subtitle: 'Under the Grave (2016)',
        title: 'Rozes'
    });
}
