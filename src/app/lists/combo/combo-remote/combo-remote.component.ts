import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
    IComboSearchInputEventArgs, IComboSelectionChangingEventArgs, IForOfState,
    IgxComboComponent, IgxToastComponent, VerticalAlignment
} from '@infragistics/igniteui-angular';
import { RemoteNWindService } from '../../../services/remoteNwind.service';

@Component({
    providers: [RemoteNWindService],
    selector: 'app-combo-remote',
    styleUrls: ['./combo-remote.component.scss'],
    templateUrl: './combo-remote.component.html'
})
export class ComboRemoteComponent implements OnInit, AfterViewInit {
    @ViewChild('loadingToast')
    public loadingToast: IgxToastComponent;

    @ViewChild('remoteCombo')
    public remoteCombo: IgxComboComponent;

    public prevRequest: any;
    public rData: any;

    private searchText: string = null;
    private defaultVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private currentVirtState: IForOfState = { chunkSize: 6, startIndex: 0 };
    private itemID: number = 1;
    private itemCount: number = 0;
    private hasSelection: boolean;
    private additionalScroll: number = 0;

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
            chunkSize: Math.ceil(250 / this.remoteCombo.itemHeight)
        };
        this.remoteService.getData(initSize, null, (data) => {
            this.remoteCombo.totalItemCount = data['@odata.count'];
            this.itemCount = this.remoteCombo.totalItemCount;
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
            this.remoteCombo.virtualizationState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
                this.loadingToast.close();
                this.cdr.detectChanges();
            }
        );
    }

    public handleSearchInputUpdate(searchData: IComboSearchInputEventArgs) {
        this.currentVirtState.startIndex = 0;
        this.currentVirtState.chunkSize = Math.ceil(this.remoteCombo.itemsMaxHeight / this.remoteCombo.itemHeight);
        this.searchText = searchData?.searchText || '';
        this.remoteService.getData(
            this.searchText ? this.currentVirtState : this.defaultVirtState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
            }
        );
    }

    public onOpened() {
        const scroll: number = this.remoteCombo.virtualScrollContainer.getScrollForIndex(this.itemID - 1);
        this.remoteCombo.virtualScrollContainer.scrollPosition = scroll + this.additionalScroll;
        this.cdr.detectChanges();
    }

    public onClosing() {
        this.searchText = '';
    }

    public onClosed() {
        this.currentVirtState.startIndex = (this.itemID || 1) - 1;
        this.remoteService.getData(
            this.currentVirtState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
                this.cdr.detectChanges();
            }
        );
    }

    public handleSelectionChanging(evt: IComboSelectionChangingEventArgs) {
        this.hasSelection = !!evt?.newSelection.length;

        if (!this.hasSelection) {
            this.itemID = 1;
            this.currentVirtState = this.defaultVirtState;
            return;
        }

        const currentSelection = evt.newSelection[evt.newSelection.length - 1]
        this.currentVirtState.chunkSize = Math.ceil(this.remoteCombo.itemsMaxHeight / this.remoteCombo.itemHeight);

        this.itemCount === currentSelection ?
            this.additionalScroll = this.remoteCombo.itemHeight :
            this.additionalScroll = 0;

        if (this.itemCount - currentSelection >= this.currentVirtState.chunkSize - 1) {
            this.itemID = this.currentVirtState.startIndex = currentSelection;
        } else {
            this.itemID = this.currentVirtState.startIndex = this.itemCount - (this.currentVirtState.chunkSize - 1);
        }
    }
}
