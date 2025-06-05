import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, inject } from '@angular/core';
import { IgxPaginatorComponent, IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardContentDirective, IgxCardHeaderSubtitleDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { DATA } from '../../data/product';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-pagination-sample',
    styleUrls: ['./pagination-sample.component.scss'],
    templateUrl: './pagination-sample.component.html',
    imports: [IgxCardComponent, IgxCardMediaDirective, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardContentDirective, IgxCardHeaderSubtitleDirective, IgxCardActionsComponent, IgxButtonDirective, IgxRippleDirective, IgxIconButtonDirective, IgxIconComponent, IgxPaginatorComponent, CurrencyPipe]
})
export class PaginationSampleComponent implements AfterViewInit {
    cdr = inject(ChangeDetectorRef);

    @ViewChild('paginator', { static: true }) public paginator!: IgxPaginatorComponent;
    public productData = DATA;
    public itemsPerPage = [3, 4, 5];

    public ngAfterViewInit() {
        this.cdr.detectChanges();
    }

    public get data() {
        let products = this.productData;
        products = this.paginator ?
        this.productData.slice(this.paginator.page * this.paginator.perPage,
            ((this.paginator.page * this.paginator.perPage) + this.paginator.perPage)) : products;
        return products;
    }

    public navigateToFirstPage() {
        this.paginator.page = 0;
    }
}
