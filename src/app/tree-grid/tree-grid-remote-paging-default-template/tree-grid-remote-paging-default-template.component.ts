import { formatNumber } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridPagingMode, IgxTreeGridComponent } from 'igniteui-angular';
import { Observable } from 'rxjs';
import { RemotePagingService } from './remotePagingService';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tree-grid-remote-paging-default-template',
    styleUrls: ['./tree-grid-remote-paging-default-template.component.scss'],
    templateUrl: './tree-grid-remote-paging-default-template.component.html'
})
export class TreeGridRemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public totalCount = 0;
    public page = 0;
    public data: Observable<any[]>;
    public mode = GridPagingMode.Remote;
    public isLoading = true;

    private _dataLengthSubscriber;
    private _perPage = 10;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    constructor(
        private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this.data.subscribe(() => {
            this.isLoading = false;
        });
        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.remoteService.getData(0, this.treeGrid.perPage);
        this.remoteService.getDataLength();
    }

    public paginate(page) {
        this.isLoading = true;
        const skip = page * this.treeGrid.perPage;
        this.remoteService.getData(skip, this.treeGrid.perPage);
    }

    public formatSize(value: number) {
        return formatNumber(value, 'en') + ' KB';
    }
}
