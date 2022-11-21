import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { IComboSearchInputEventArgs, IForOfState, IgxSimpleComboComponent, IgxToastComponent, ISimpleComboSelectionChangingEventArgs, VerticalAlignment } from 'igniteui-angular';
import { RemoteNWindService } from '../../../services/remoteNwind.service';

@Component({
    providers: [RemoteNWindService],
    selector: 'app-simple-combo-remote',
    templateUrl: './simple-combo-remote.component.html',
    styleUrls: ['./simple-combo-remote.component.scss']
})
export class SimpleComboRemoteComponent implements OnInit, AfterViewInit {
    @ViewChild('loadingToast')
    public loadingToast: IgxToastComponent;

    @ViewChild('remoteSimpleCombo', { read: IgxSimpleComboComponent, static: true })
    public remoteSimpleCombo: IgxSimpleComboComponent;

    public prevRequest: any;
    public rData: any;
    private searchText: string = null;
    private defaultVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private currentVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private itemID = 1;
    private itemCount: number = 0;
    private hasSelection: boolean;

    constructor(
        private remoteService: RemoteNWindService,
        public cdr: ChangeDetectorRef
    ) { }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const initSize = {
            startIndex: 0,
            chunkSize: Math.ceil(this.remoteSimpleCombo.itemsMaxHeight / this.remoteSimpleCombo.itemHeight)
        };
        this.remoteService.getData(initSize, null, (data) => {
            this.remoteSimpleCombo.totalItemCount = data['@odata.count'];
            this.itemCount = this.remoteSimpleCombo.totalItemCount;
        });
    }

    public dataLoading() {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.loadingToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.open('Loading Remote Data...');
        this.cdr.detectChanges();

        this.prevRequest = this.remoteService.getData(
            this.remoteSimpleCombo.virtualizationState,
            this.searchText,
            (data) => {
                this.remoteSimpleCombo.totalItemCount = data['@odata.count'];
                this.loadingToast.close();
                this.cdr.detectChanges();
            }
        );
    }

    public onOpened() {
        if (this.itemID === 1) {
            this.remoteSimpleCombo.virtualScrollContainer.scrollPosition = 0;
        } else {
            const scroll: number = this.remoteSimpleCombo.virtualScrollContainer.getScrollForIndex(this.itemID - 1);
            this.remoteSimpleCombo.virtualScrollContainer.scrollPosition = scroll;
        }
        this.cdr.detectChanges();
    }

    public onClosing() {
        this.searchText = '';
    }

    public onClosed() {
        this.currentVirtState.startIndex = (this.itemID || 1) - 1;
        this.remoteService.getData(
            this.hasSelection ? this.currentVirtState : this.defaultVirtState,
            this.searchText,
            (data) => {
                this.remoteSimpleCombo.totalItemCount = data['@odata.count'];
                this.cdr.detectChanges();
            }
        );
    }

    public handleSelectionChanging(evt: ISimpleComboSelectionChangingEventArgs) {
        this.hasSelection = evt.newSelection !== undefined;
        this.currentVirtState.chunkSize = Math.ceil(this.remoteSimpleCombo.itemsMaxHeight / this.remoteSimpleCombo.itemHeight);

        if (evt.newSelection === 1 || !this.hasSelection) {
            this.itemID = 1;
            this.currentVirtState.startIndex = 0;
            return;
        }

        if (this.itemCount - evt.newSelection >= this.currentVirtState.chunkSize - 1) {
            this.itemID = this.currentVirtState.startIndex = evt.newSelection;
        } else {
            this.itemID = this.currentVirtState.startIndex = this.itemCount - (this.currentVirtState.chunkSize - 1);
        }
    }

    public handleSearchInputUpdate(searchData: IComboSearchInputEventArgs) {
        this.searchText = searchData?.searchText || '';
        this.remoteService.getData(
            this.searchText ? this.remoteSimpleCombo.virtualizationState : this.defaultVirtState,
            this.searchText,
            (data) => {
                this.remoteSimpleCombo.totalItemCount = data['@odata.count'];
            }
        );
    }
}
