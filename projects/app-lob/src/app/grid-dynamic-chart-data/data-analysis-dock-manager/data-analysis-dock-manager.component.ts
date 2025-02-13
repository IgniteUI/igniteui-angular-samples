/* eslint-disable max-len */
import { AfterViewInit, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, Pipe, PipeTransform, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IgxChartIntegrationDirective, OPTIONS_TYPE, CHART_TYPE } from 'igniteui-angular-extras';
import { IgcDockManagerLayout, IgcDockManagerPaneType, IgcSplitPane, IgcSplitPaneOrientation } from 'igniteui-dockmanager';
import { FinancialData } from '../../data/financialData';
import { FloatingPanesService } from '../../services/floating-panes.service';
import { DockSlotComponent } from './dock-slot/dock-slot.component';
import { IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxDividerDirective, IgxBadgeComponent } from 'igniteui-angular';
import { NgFor, NgIf, NgClass, DecimalPipe, TitleCasePipe, CurrencyPipe } from '@angular/common';

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
        if (count === 0 && (chartTypes[contentId] || Object.keys(chartTypes).indexOf(contentId) !== -1)) {
            delete chartTypes[contentId];
            return false;
        }
        return count >= 1;

    }

    private hasDuplicateContentID = (ob, contentId, count) => {

        if (ob['contentId'] && ob['contentId'] === contentId) {
            count++;
        }

        for (const i in ob) {
            if (!ob.hasOwnProperty(i)) { continue; }

            if ((typeof ob[i]) === 'object') {
                count = this.hasDuplicateContentID(ob[i], contentId, count);
            }
        }
        return count;
    };
}

@Component({
    selector: 'app-data-analysis-dock-manager',
    templateUrl: './data-analysis-dock-manager.component.html',
    styleUrls: ['./data-analysis-dock-manager.component.scss'],
    providers: [FloatingPanesService],
    imports: [IgxGridComponent, IgxChartIntegrationDirective, IgxBadgeComponent, IgxColumnComponent, IgxCellTemplateDirective, NgFor, NgIf, NgClass, IgxDividerDirective, DockSlotComponent, DecimalPipe, TitleCasePipe, CurrencyPipe, FilterTypePipe, HastDuplicateLayouts],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DataAnalysisDockManagerComponent implements OnInit, AfterViewInit {

    @ViewChild('dock', { read: ElementRef })
    public dockManager: ElementRef<HTMLIgcDockmanagerElement>;

    @ViewChild(IgxChartIntegrationDirective, { read: IgxChartIntegrationDirective, static: true })
    public chartIntegration: IgxChartIntegrationDirective;

    @ViewChildren(DockSlotComponent)
    public dockSlots: QueryList<DockSlotComponent>;

    public allCharts: CHART_TYPE[] = [];
    public data;
    public chartData = [];
    public selectedCharts = {};
    public headersRenderButton = false;
    public chartTypes = ['Column', 'Area', 'Bar', 'Line', 'Scatter', 'Pie'];

    constructor(private cdr: ChangeDetectorRef, private paneService: FloatingPanesService) { }

    public ngOnInit() {
        this.data = FinancialData.generateData(1000);
    }

    public ngAfterViewInit() {
        this.allCharts = this.chartIntegration.getAvailableCharts();
        const pieChartOptions = {
            labelsPosition: 4,
            allowSliceExplosion: true,
            sliceClick: (evt) => { evt.args.isExploded = !evt.args.isExploded; },
            formatLabel: (context) => `${context.percentValue.toFixed(2)}%`
        };

        this.chartIntegration.setChartComponentOptions(CHART_TYPE.PIE, OPTIONS_TYPE.CHART, pieChartOptions);
        this.chartIntegration.getAvailableCharts()
            .filter(chart => chart.indexOf('Scatter') === -1 ||
                chart.indexOf('Bar') === -1 ||
                chart !== CHART_TYPE.PIE)
            .forEach(chart => this.chartIntegration.setChartComponentOptions(chart, OPTIONS_TYPE.X_AXIS, { labelAngle: 30 }));
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
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
        return this.dockSlots.find(s => s.id === type).chartHost;
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(3);
    }

    public createChart(type: CHART_TYPE) {
        const floatingPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            panes: [
                {
                    type: IgcDockManagerPaneType.contentPane,
                    header: type,
                    contentId: type
                }
            ]
        };
        const splitPane: IgcSplitPane = {
            type: IgcDockManagerPaneType.splitPane,
            orientation: IgcSplitPaneOrientation.horizontal,
            floatingWidth: 550,
            floatingHeight: 350,
            panes: [floatingPane]
        };

        this.paneService.appendPane(splitPane);
        const chartHost = this.getChartHostFromSlot(type);
        chartHost.viewContainerRef.clear();
        this.chartIntegration.chartFactory
        const chart = this.chartIntegration.chartFactory(type, chartHost.viewContainerRef);

        this.dockManager.nativeElement.layout.floatingPanes.push(splitPane);
        this.docLayout = { ...this.dockManager.nativeElement.layout };
        this.selectedCharts[type] = chart;
        this.cdr.detectChanges();
    }
}
