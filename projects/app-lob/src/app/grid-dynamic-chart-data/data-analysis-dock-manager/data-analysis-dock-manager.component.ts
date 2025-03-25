import { AfterViewInit, ChangeDetectorRef, ViewContainerRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, Pipe, PipeTransform, QueryList, ViewChild, ViewChildren, TemplateRef } from '@angular/core';
import { IgxChartIntegrationDirective, IgxConditionalFormattingDirective, IgxContextMenuDirective, OPTIONS_TYPE, CHART_TYPE, IDeterminedChartTypesArgs } from 'igniteui-angular-extras';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPane, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { FinancialData } from '../../data/financialData';
import { FloatingPanesService } from '../../services/floating-panes.service';
import { DockSlotComponent } from './dock-slot/dock-slot.component';
import { IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxDividerDirective, IgxBadgeComponent, IColumnSelectionEventArgs } from 'igniteui-angular';
import { NgClass, DecimalPipe, TitleCasePipe, CurrencyPipe } from '@angular/common';
import { debounceTime } from 'rxjs/operators';

@Pipe({
    name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {
    public transform(collection: CHART_TYPE[], type: string): CHART_TYPE[] {
        return collection.filter(types => types.indexOf(type) !== -1 && types.indexOf(type, type.length - 1) === -1);
    }
}

@Pipe({
    name: 'hastDuplicateLayouts'
})
export class HastDuplicateLayouts implements PipeTransform {
    public transform(contentId: string, layout: IgcDockManagerLayout, chartTypes) {
        const count = this.hasDuplicateContentID(layout, contentId, 0);
        if (count === 0 && (chartTypes[contentId] || Object.keys(chartTypes).includes(contentId))) {
            delete chartTypes[contentId];
            return false;
        }
        return count >= 1;
    }

    private hasDuplicateContentID(ob, contentId, count) {
        if (ob['contentId'] && ob['contentId'] === contentId) {
            count++;
        }

        for (const i in ob) {
            if (!ob.hasOwnProperty(i)) continue;
            if (typeof ob[i] === 'object') {
                count = this.hasDuplicateContentID(ob[i], contentId, count);
            }
        }
        return count;
    }
}

@Component({
    selector: 'app-data-analysis-dock-manager',
    templateUrl: './data-analysis-dock-manager.component.html',
    styleUrls: ['./data-analysis-dock-manager.component.scss'],
    providers: [FloatingPanesService],
    imports: [
        IgxGridComponent, IgxConditionalFormattingDirective, IgxChartIntegrationDirective, IgxContextMenuDirective,
        IgxBadgeComponent, IgxColumnComponent, IgxCellTemplateDirective, NgClass, IgxDividerDirective,
        DockSlotComponent, DecimalPipe, TitleCasePipe, CurrencyPipe, FilterTypePipe, HastDuplicateLayouts
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataAnalysisDockManagerComponent implements OnInit, AfterViewInit {
    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild('dock', { read: ElementRef })
    public dockManager: ElementRef<HTMLIgcDockmanagerElement>;

    @ViewChild(IgxChartIntegrationDirective, { read: IgxChartIntegrationDirective, static: true })
    public chartIntegration: IgxChartIntegrationDirective;

    @ViewChildren(DockSlotComponent)
    public dockSlots: QueryList<DockSlotComponent>;

    @ViewChild('template', { read: TemplateRef })
    public emptyChartTemplate: TemplateRef<any>;

    public availableCharts: CHART_TYPE[] = [];
    public allCharts: CHART_TYPE[] = [];
    public data;
    public selectedCharts = {};
    public chartTypes = ['Column', 'Area', 'Bar', 'Line', 'Scatter', 'Pie'];

    constructor(private cdr: ChangeDetectorRef, private paneService: FloatingPanesService) {}

    public ngOnInit(): void {
        this.data = FinancialData.generateData(1000);
    }

    public ngAfterViewInit(): void {
        this.allCharts = this.chartIntegration.getAllChartTypes();
        this.cdr.detectChanges();

        this.configureChartOptions();

        this.chartIntegration.onChartTypesDetermined.subscribe(this.onChartTypesDetermined.bind(this));
        this.cdr.detectChanges();

        this.grid.rangeSelected.pipe(debounceTime(100)).subscribe(this.createChartCommonLogic.bind(this));
        this.grid.columnSelectionChanging.pipe(debounceTime(100)).subscribe(this.createChartCommonLogic.bind(this));
    }

    private configureChartOptions(): void {
        const pieChartOptions = {
            labelsPosition: 4,
            allowSliceExplosion: true,
            sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; },
            formatLabel: (context) => `${context.percentValue.toFixed(2)}%`
        };

        this.chartIntegration.setChartComponentOptions(CHART_TYPE.PIE, OPTIONS_TYPE.CHART, pieChartOptions);
        this.chartIntegration.getAvailableCharts()
            .filter(chart => !['Scatter', 'Bar'].includes(chart) && chart !== CHART_TYPE.PIE)
            .forEach(chart => this.chartIntegration.setChartComponentOptions(chart, OPTIONS_TYPE.X_AXIS, { labelAngle: 30 }));
    }

    public onChartTypesDetermined(args: IDeterminedChartTypesArgs): void {
        const chartsToDisable = [];
        const chartsToEnable = [];

        args.chartsAvailability.forEach((isAvailable, chart) => {
            (args.chartsForCreation.includes(chart)) ? chartsToEnable.push(chart) : chartsToDisable.push(chart);
        });

        if (chartsToDisable.length) this.chartIntegration.disableCharts(chartsToDisable);
        if (chartsToEnable.length) this.chartIntegration.enableCharts(chartsToEnable);

        this.availableCharts = this.chartIntegration.getAvailableCharts();
    }

    public docLayout: IgcDockManagerLayout = {
        rootPane: {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.documentHost,
                    rootPane: {
                        type: IgcDockManagerPaneType.splitPane,
                        size: 75,
                        orientation: IgcSplitPaneOrientation.horizontal,
                        panes: [
                            {
                                type: IgcDockManagerPaneType.contentPane,
                                contentId: 'grid',
                                header: 'Grid',
                                allowClose: false
                            }
                        ]
                    }
                },
                {
                    type: IgcDockManagerPaneType.contentPane,
                    contentId: 'chart-types-content',
                    header: 'Chart Types',
                    size: 25,
                    allowClose: false
                }
            ]
        },
        floatingPanes: []
    };

    public getChartHostFromSlot(type: CHART_TYPE) {
        return this.dockSlots.find(s => s.id === type)?.chartHost;
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(3);
    }

    public createChart(type: CHART_TYPE) {
        const splitPane: IgcSplitPane = this.createSplitPane(type);

        this.paneService.appendPane(splitPane);
        const chartHost = this.getChartHostFromSlot(type);
        chartHost.viewContainerRef.clear();
        const chart = this.createChartInstance(type, chartHost.viewContainerRef);

        this.dockManager.nativeElement.layout.floatingPanes.push(splitPane);
        this.docLayout = { ...this.dockManager.nativeElement.layout };
        this.selectedCharts[type] = chart;
        this.cdr.detectChanges();
    }

    private createSplitPane(type: CHART_TYPE): IgcSplitPane {
        return {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingWidth: 550,
            floatingHeight: 350,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    header: type,
                    contentId: type
                }
            ]
        };
    }

    public createChartCommonLogic(): void {
        if (Object.keys(this.selectedCharts).length === 0) return;

        Object.keys(this.selectedCharts).forEach((chartType: CHART_TYPE) => {
            const chartHost = this.getChartHostFromSlot(chartType);
            if (this.availableCharts.includes(chartType)) {
                this.updateChart(chartType, chartHost);
            } else {
                this.renderEmptyChart(chartType, chartHost);
            }
        });
    }

    private updateChart(chartType: CHART_TYPE, chartHost: any): void {
        if (chartType !== CHART_TYPE.PIE && typeof this.selectedCharts[chartType] === 'object') {
            this.selectedCharts[chartType] = this.createChartInstance(chartType, null, this.selectedCharts[chartType]);
        } else {
            chartHost.viewContainerRef.clear();
            this.selectedCharts[chartType] = this.createChartInstance(chartType, chartHost.viewContainerRef);
        }
    }

    private renderEmptyChart(chartType: CHART_TYPE, chartHost: any): void {
        this.clearViewContainer(chartHost.viewContainerRef);
        const embeddedView = chartHost.viewContainerRef.createEmbeddedView(this.emptyChartTemplate);
        embeddedView.detectChanges();
        this.selectedCharts[chartType] = 'Empty';
    }

    private clearViewContainer(viewContainerRef: ViewContainerRef): void {
        for (let i = viewContainerRef.length - 1; i >= 0; i--) {
            const viewRef = viewContainerRef.get(i);
            if (viewRef) {
                const componentInstance = (viewRef as any).context;
                if (componentInstance?.destroy) componentInstance.destroy();
            }
        }
        viewContainerRef.clear();
    }

    private createChartInstance(chartType: CHART_TYPE, viewContainerRef?: any, existingChart?: any): any {
        return this.chartIntegration.chartFactory(chartType, viewContainerRef, existingChart);
    }
}
