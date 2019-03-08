import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent } from "igniteui-angular";
import { RemoteServiceVirt } from "../services/remoteService";

@Component({
    providers: [RemoteServiceVirt],
    selector: "grid-remote-virtualization-sample",
    styleUrls: ["grid-sample-4.component.scss"],
    templateUrl: "grid-sample-4.component.html"
})

export class GridRemoteVirtualizationSampleComponent {
    public remoteData: any;

    @ViewChild("grid") public grid: IgxGridComponent;
    @ViewChild("remoteDataLoadingLarge", { read: TemplateRef })
    protected remoteDataLoadingLargeTemplate: TemplateRef<any>;
    @ViewChild("remoteDataLoadingMedium", { read: TemplateRef })
    protected remoteDataLoadingMediumTemplate: TemplateRef<any>;
    @ViewChild("remoteDataLoadingSmall", { read: TemplateRef })
    protected remoteDataLoadingSmallTemplate: TemplateRef<any>;

    private _columnCellCustomTemplates: Map<IgxColumnComponent, TemplateRef<any>>;
    private _isColumnCellTemplateReset: boolean = false;
    private _prevRequest: any;

    constructor(private _remoteService: RemoteServiceVirt, public cdr: ChangeDetectorRef) { }

    public ngOnInit(): void {
        this.remoteData = this._remoteService.data;
        this._columnCellCustomTemplates = new Map<IgxColumnComponent, TemplateRef<any>>();
    }

    public ngAfterViewInit() {
        this.grid.isLoading = true;

        this._remoteService.getData(this.grid.virtualizationState, this.grid.sortingExpressions[0], true, (data) => {
            this.grid.totalItemCount = data["@odata.count"];
            this.grid.isLoading = false;
        });
    }

    public processData(reset) {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }

        if (this.grid.columns.length > 0) {
            this.grid.columns.forEach((column: IgxColumnComponent) => {
                if (column.bodyTemplate && !this._isColumnCellTemplateReset) {
                    this._columnCellCustomTemplates.set(column, column.bodyTemplate);
                }

                column.bodyTemplate = this.getDataLoadingTemplate();
            });

            this._isColumnCellTemplateReset = true;
        }

        this._prevRequest = this._remoteService.getData(this.grid.virtualizationState,
            this.grid.sortingExpressions[0], reset, () => {
                if (this._isColumnCellTemplateReset) {
                    let oldTemplate;
                    this.grid.columns.forEach((column: IgxColumnComponent) => {
                        oldTemplate = this._columnCellCustomTemplates.get(column);
                        column.bodyTemplate = oldTemplate;
                    });
                    this._columnCellCustomTemplates.clear();
                    this._isColumnCellTemplateReset = false;
                }

                this.cdr.detectChanges();
            });
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }

    public ngOnDestroy() {
        if (this._prevRequest) {
            this._prevRequest.unsubscribe();
        }
    }

    private getDataLoadingTemplate(): TemplateRef<any> {
        const val = Math.floor(Math.random() * 3) + 1;

        switch (val) {
            case 1: return this.remoteDataLoadingLargeTemplate;
            case 2: return this.remoteDataLoadingMediumTemplate;
            case 3: return this.remoteDataLoadingSmallTemplate;
        }
    }
}
