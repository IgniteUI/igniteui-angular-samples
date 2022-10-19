import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {
    IComboSearchInputEventArgs, IComboSelectionChangingEventArgs, IForOfState,
    IgxComboComponent, IgxToastComponent, VerticalAlignment
} from 'igniteui-angular';
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
            chunkSize: Math.ceil(250 / this.remoteCombo.itemHeight)
        };
        this.remoteService.getData(initSize, null, (data) => {
            this.remoteCombo.totalItemCount = data['@odata.count'];
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

    public searchInput(searchData: IComboSearchInputEventArgs) {
        this.searchText = searchData?.searchText || '';
        this.remoteService.getData(
            this.searchText ? this.remoteCombo.virtualizationState : this.defaultVirtState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
            }
        );
    }

    public onOpening() {        
        this.remoteService.getData(           
           this.hasSelection ? this.currentVirtState : this.defaultVirtState,
            this.searchText,
            (data) => {
                this.remoteCombo.totalItemCount = data['@odata.count'];
            }
        );
    }

    public onClosing() {
        this.searchText = '';
    }

    public handleSelectionChanging(evt: IComboSelectionChangingEventArgs) {
        this.hasSelection = !!evt?.newSelection.length;                   
        this.currentVirtState.chunkSize = Math.ceil(this.remoteCombo.itemsMaxHeight / this.remoteCombo.itemHeight);
        this.searchText === null || this.searchText ==='' ?
        this.currentVirtState.startIndex = this.remoteCombo.virtualizationState.startIndex :
        this.currentVirtState.startIndex = evt.newSelection[evt.newSelection.length-1] - this.currentVirtState.chunkSize/2;
    }
}
