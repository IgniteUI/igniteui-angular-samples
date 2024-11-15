import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxToastComponent, CellType, IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgcFormControlDirective } from 'igniteui-angular';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-grid-rating-sample',
    styleUrls: ['./grid-with-rating.component.scss'],
    templateUrl: 'grid-with-rating.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgcFormControlDirective, FormsModule, IgxToastComponent]
})
export class GridWithRatingComponent implements OnInit {
    @ViewChild('toast', { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public data: any[];

    public message: string;

    public ngOnInit(): void {
        this.data = DATA;
        this.data.map(r => r.Rating = Math.floor(Math.random() * 5) + 1)
    }

    public ratingChanged(event: CustomEvent, cell: CellType) {
        cell.value = event.detail;
        this.message = `You rated ${cell.row.data.ProductName} with score: ${event.detail}`;
        this.toast.open();
    }
}
