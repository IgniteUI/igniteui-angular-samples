import { HttpClient } from "@angular/common/http";
import { ChangeDetectorRef, Component, Injectable, ViewChild, TemplateRef } from "@angular/core";
import { IgxColumnComponent } from "igniteui-angular/grid/column.component";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import {
    DataContainer,
    IForOfState
} from "igniteui-angular/main";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class RemoteService {
    public remoteData: Observable<any[]>;
    private url: string = "/api/financial";
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(data?: IForOfState, cb?: (any) => void): any {
        const dataState = data;
        return this.http
            .get(this.buildUrl(dataState))
            .subscribe((d: any) => {
                this._remoteData.next(d.value);
                if (cb) {
                    cb(d);
                }
            });
    }

    private buildUrl(dataState: any): string {
        let qS: string = "?";
        let requiredChunkSize: number;
        if (dataState) {
            const skip = dataState.startIndex;

            requiredChunkSize = dataState.chunkSize === 0 ?
                // Set initial chunk size, the best value is igxForContainerSize divided on igxForItemSize
                10 : dataState.chunkSize;
            const top = requiredChunkSize;
            qS += `$skip=${skip}&$top=${top}&$count=true`;
        }
        return `${this.url}${qS}`;
    }
}

@Component({
    providers: [RemoteService],
    selector: "grid-remote-virtualizatiuon-sample",
    styleUrls: ["grid-sample-4.component.scss"],
    templateUrl: "grid-sample-4.component.html"
})

export class GridRemoteVirtualizationSampleComponent {
    public remoteData: any;
    public prevRequest: any;

    @ViewChild("grid1") public grid: IgxGridComponent;
    @ViewChild("remoteDataLoading", { read: TemplateRef }) protected remoteDataLoadingTemplate: TemplateRef<any>;

    private _columnCellCustomTemplates: Map<IgxColumnComponent, TemplateRef<any>>;
    private _isColumnCellTemplateReset: boolean = false;

    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }
    public ngOnInit(): void {
        this.remoteData = this.remoteService.remoteData;
        this._columnCellCustomTemplates = new Map<IgxColumnComponent, TemplateRef<any>>();
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.grid.virtualizationState, (data) => {
            this.grid.totalItemCount = data.count;
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }

        if (this.grid.columns.length > 0 && !this._isColumnCellTemplateReset) {
            this.grid.columns.forEach((column: IgxColumnComponent) => {
                if (column.bodyTemplate) {
                    this._columnCellCustomTemplates.set(column, column.bodyTemplate);
                }
                column.bodyTemplate = this.remoteDataLoadingTemplate;
            });
            this._isColumnCellTemplateReset = true;
        }

        this.prevRequest = this.remoteService.getData(evt, () => {
            if (this._isColumnCellTemplateReset) {
                this.grid.columns.forEach((column: IgxColumnComponent) => {
                    let oldTemplate = this._columnCellCustomTemplates.get(column);
                    column.bodyTemplate = oldTemplate;
                });
                this._columnCellCustomTemplates.clear();
                this._isColumnCellTemplateReset = false;
            }
        });
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}
