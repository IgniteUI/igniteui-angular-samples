import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { GridPagingMode, IgxGridComponent, IgxColumnComponent, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { RemotePagingService } from '../../services/remotePaging.service';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: 'app-remote-paging-grid-sample',
    styleUrls: ['./remote-paging-sample.component.scss'],
    templateUrl: './remote-paging-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxPaginatorComponent, IgxPaginatorContentDirective, IgxPageSizeSelectorComponent, IgxPageNavigationComponent, AsyncPipe]
})
export class RemotePagingGridSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    private remoteService = inject(RemotePagingService);

    @ViewChild('grid1', { static: true }) public grid1: IgxGridComponent;
    public page = 0;
    public totalCount = 0;
    public pages = [];
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 15, 25, 50];
    public mode = GridPagingMode.Remote;
    private _perPage = 15;
    private _dataLengthSubscriber;

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data: any) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
        });
    }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.grid1.isLoading = true;
        this.remoteService.getData(0, this.perPage);
    }

    public paginate(page: number) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;

        this.remoteService.getData(skip, top);
    }

    public perPageChange(perPage: number) {
        const skip = this.page * perPage;
        const top = perPage;

        this.remoteService.getData(skip, top);
    }
}
