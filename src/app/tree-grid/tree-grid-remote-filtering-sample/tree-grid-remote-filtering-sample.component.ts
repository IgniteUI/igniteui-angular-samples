import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { NoopFilteringStrategy } from 'igniteui-angular/core';
import { IgxCellTemplateDirective, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { RemoteFilteringService } from '../services/remoteFilteringService';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { AsyncPipe } from '@angular/common';

const DEBOUNCE_TIME = 300;

@Component({
    providers: [RemoteFilteringService],
    selector: 'app-tree-grid-remote-filtering-sample',
    styleUrls: ['./tree-grid-remote-filtering-sample.component.scss'],
    templateUrl: './tree-grid-remote-filtering-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxIconComponent, AsyncPipe]
})
export class TreeGridRemoteFilteringSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    private _remoteService = inject(RemoteFilteringService);
    private _cdr = inject(ChangeDetectorRef);

    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    public remoteData: Observable<any[]>;
    public noopFilterStrategy = NoopFilteringStrategy.instance();

    private destroy$ = new Subject<void>();

    public ngOnInit() {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.processData();
        this._cdr.detectChanges();

        this.treeGrid.filteringExpressionsTreeChange.pipe(
            debounceTime(DEBOUNCE_TIME),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.processData();
        });
    }

    public processData() {
        this.treeGrid.isLoading = true;

        const filteringExpr = this.treeGrid.filteringExpressionsTree;

        this._remoteService.getData(filteringExpr, () => {
            this.treeGrid.isLoading = false;
        });
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
