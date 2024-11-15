import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { GridPagingMode, IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { RemotePagingService } from './remotePagingService';
import { BehaviorSubject } from 'rxjs';

@Component({
    providers: [RemotePagingService],
    selector: 'app-hierarchical-grid-remote-paging',
    styleUrls: ['./hierarchical-grid-remote-paging.component.scss'],
    templateUrl: 'hierarchical-grid-remote-paging.component.html',
    standalone: false
})

export class HGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('hierarchicalGrid', { static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;
    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalCount = 0;
    public title = 'gridPaging';
    public selectOptions = [5, 10, 25, 50];
    public data: BehaviorSubject<any> = new BehaviorSubject([]);
    public mode = GridPagingMode.Remote;

    private _perPage = 10;
    private _dataLengthSubscriber;
    private _dataSubscriber;

    constructor(private remoteService: RemotePagingService) { }

    public ngOnInit(): void {
        this._dataLengthSubscriber = this.remoteService.getDataLength(
            { parentID: null, rootLevel: true, key: 'Customers' }).subscribe((length) => {
                this.totalCount = length;
            });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }

        if (this._dataSubscriber) {
            this._dataSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.hierarchicalGrid.isLoading = true;
        this._dataSubscriber = this.remoteService.getData({parentID: null, rootLevel: true, key: 'Customers' }, 0, this.perPage)
            .subscribe((data) => {
                this.hierarchicalGrid.isLoading = false;
                this.data.next(data);
            },(error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.hierarchicalGrid.isLoading = false;
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
    }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public dateFormatter(val: string) {
        return new Intl.DateTimeFormat('en-US').format(new Date(val));
    }

    public gridCreated(event: IGridCreatedEventArgs, _foreignKey: string) {
        const dataState = {
            foreignKey: _foreignKey,
            key: event.owner.key,
            parentID: event.parentID,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            },
            (error) => {
                event.grid.emptyGridMessage = error.message;
                event.grid.isLoading = false;
                event.grid.cdr.detectChanges();
            }
        );
    }

    public paginate(page: number) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: 'Customers' }, skip, top).subscribe((data) => {
                this.data.next(data);
                this.hierarchicalGrid.cdr.detectChanges();
            },
                (error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.data.next([]);
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
    }

    public perPageChange(perPage: number) {
        const skip = this.page * perPage;
        const top = perPage;

        this.remoteService.getData(skip, top);
    }
}
