import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridRow, IgxToastComponent } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { DATA } from '../../data/nwindData';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-grid-rating-sample',
    styleUrls: ['./grid-with-rating.component.scss'],
    templateUrl: 'grid-with-rating.component.html'
})
export class GridWithRatingComponent implements OnInit {
    @ViewChild('toast', { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public data: any[];

    public message: string;

    public ngOnInit(): void {
        this.data = DATA;
    }

    public ratingChanged(event: CustomEvent, row: IgxGridRow) {
        this.message = `You rated ${row.data.ProductName} with score: ${event.detail}`;
        this.toast.open();
    }
}
