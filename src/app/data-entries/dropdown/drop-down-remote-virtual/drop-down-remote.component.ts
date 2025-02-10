import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { IForOfState, IgxDropDownComponent, IgxForOfDirective, IgxToastComponent, VerticalAlignment, IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownItemComponent } from 'igniteui-angular';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RemoteNWindService } from '../../../services/remoteNwind.service';
import { AsyncPipe } from '@angular/common';

// tslint:disable:object-literal-sort-keys
@Component({
    providers: [RemoteNWindService],
    selector: 'app-drop-down-remote',
    templateUrl: './drop-down-remote.component.html',
    styleUrls: ['./drop-down-remote.component.scss'],
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxForOfDirective, IgxDropDownItemComponent, IgxToastComponent, AsyncPipe]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy, AfterViewInit {
    @ViewChild('loadingToast', { read: IgxToastComponent, static: true })
    public loadingToast: IgxToastComponent;
    @ViewChild(IgxForOfDirective, { read: IgxForOfDirective, static: true })
    public remoteForDir: IgxForOfDirective<any>;
    @ViewChild('remoteDropDown', { read: IgxDropDownComponent, static: true })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 48;
    public itemsMaxHeight = 320;
    public prevRequest: Subscription;
    public rData: any;
    private destroy$ = new Subject<void>();
    constructor(private remoteService: RemoteNWindService, public cdr: ChangeDetectorRef) { }

    public ngAfterViewInit() {
        const initialState: IForOfState = {
            startIndex: 0, chunkSize: Math.floor(this.itemsMaxHeight / this.itemHeight) + 1
        };
        this.remoteService.getData(initialState, null, (data) => {
            this.remoteForDir.totalItemCount = data['@odata.count'];
        });
        this.remoteForDir.chunkPreload.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.dataLoading(data);
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.loadingToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.open('Loading Remote Data...');
        this.cdr.detectChanges();
        this.prevRequest = this.remoteService.getData(
            evt,
            null,
            (data) => {
                this.remoteForDir.totalItemCount = data['@odata.count'];
                this.loadingToast.close();
                this.cdr.detectChanges();
            });
    }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
