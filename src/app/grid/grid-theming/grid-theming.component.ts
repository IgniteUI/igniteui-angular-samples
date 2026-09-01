import { Component, signal } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxNumberSummaryOperand, IgxSummaryResult } from 'igniteui-angular/core';
import { IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { INVOICE_DATA } from '../../data/invoiceData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
class CompactSummary extends IgxNumberSummaryOperand {
    public override operate(data?: any[]): IgxSummaryResult[] {
        return super.operate(data).filter(r => r.key === 'count' || r.key === 'sum');
    }
}

@Component({
    selector: 'app-grid-theming',
    styleUrls: ['./grid-theming.component.scss'],
    templateUrl: './grid-theming.component.html',
    imports: [
        IgxButtonDirective,
        IgxButtonGroupComponent,
        IgxColumnComponent,
        IgxGridComponent,
        IgxGridToolbarActionsComponent,
        IgxGridToolbarComponent,
        IgxGridToolbarHidingComponent,
        IgxGridToolbarPinningComponent,
        IgxGridToolbarTitleComponent,
        IgxPaginatorComponent,
        IgxPreventDocumentScrollDirective
    ]
})
export class GridThemingComponent {
    public data = INVOICE_DATA;
    public compactSummary = CompactSummary;
    public themes = [
        { label: 'Studio', class: 'theme-studio', swatch: 'theme-swatch--studio' },
        { label: 'Ledger', class: 'theme-ledger', swatch: 'theme-swatch--ledger' },
        { label: 'Editorial', class: 'theme-editorial', swatch: 'theme-swatch--editorial' },
        { label: 'Midnight', class: 'theme-midnight', swatch: 'theme-swatch--midnight' }
    ];

    public activeTheme = signal(this.themes[0].class);

    public selectTheme(args: { index: number }) {
        this.activeTheme.set(this.themes[args.index].class);
    }

    public formatCurrency(value: number) {
        return '$' + value.toFixed(2);
    }
}
