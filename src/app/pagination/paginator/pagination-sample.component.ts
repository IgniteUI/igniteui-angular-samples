import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxPaginatorComponent } from 'igniteui-angular';
import { DATA } from '../../data/product';

@Component({
    selector: 'app-pagination-sample',
    styleUrls: ['./pagination-sample.component.scss'],
    templateUrl: './pagination-sample.component.html'
})
export class PaginationSampleComponent implements OnInit{

    @ViewChild('paginator', { static: true }) public paginator!: IgxPaginatorComponent;
    public productData = DATA;
    public itemsPerPage = [3, 4, 5];

    public ngOnInit() {
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
