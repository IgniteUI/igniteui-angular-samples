import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IgxPaginatorComponent } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/product';

@Component({
    selector: 'app-pagination-sample',
    styleUrls: ['./pagination-sample.component.scss'],
    templateUrl: './pagination-sample.component.html'
})
export class PaginationSampleComponent {

    @ViewChild('paginator', { static: true }) public paginator!: IgxPaginatorComponent;
    public productData = DATA;
    public itemsPerPage = [3, 4, 5];

    constructor(public cdr: ChangeDetectorRef) {
    }

    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngAfterViewInit() {
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
