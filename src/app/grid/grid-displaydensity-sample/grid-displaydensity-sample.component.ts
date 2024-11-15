import { Component, HostBinding, OnInit, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent, IgxGridComponent, IgxNumberSummaryOperand, IgxSummaryOperand, IgxSummaryResult, IgxColumnGroupComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { DatePipe } from '@angular/common';

class CustomNumberSummary {
    public operate(data?: any[]): IgxSummaryResult[] {
      const result = new IgxSummaryOperand().operate(data);
      result.push({
        key: 'Min',
        label: 'Min',
        summaryResult: IgxNumberSummaryOperand.min(data)
      });
      result.push({
        key: 'max',
        label: 'Max',
        summaryResult: IgxNumberSummaryOperand.max(data)
      });
      return result;
    }
  }
@Component({
    selector: 'app-grid-displaydensity-sample',
    styleUrls: ['./grid-displaydensity-sample.component.scss'],
    templateUrl: './grid-displaydensity-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnGroupComponent, IgxColumnComponent, IgxCellTemplateDirective, DatePipe]
})
export class GridDisplayDensitySampleComponent implements OnInit {
    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxButtonGroupComponent, { static: true }) public buttonGroup: IgxButtonGroupComponent;
    public data;

    public size = 'small';
    public sizes;
    public numberSummaries = CustomNumberSummary;

    public ngOnInit() {
        this.data = INVOICE_DATA;
        this.sizes = [
            {
                label: 'small',
                selected: this.size === 'small',
                togglable: true
            },
            {
                label: 'medium',
                selected: this.size === 'medium',
                togglable: true
            },
            {
                label: 'large',
                selected: this.size === 'large',
                togglable: true
            }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event) {
        this.size = this.sizes[event.index].label;
        this.grid.reflow();
    }

}
