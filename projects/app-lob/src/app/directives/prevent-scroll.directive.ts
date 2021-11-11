import { AfterViewInit, Directive, Host, Inject, Input, NgModule, OnDestroy, Optional } from '@angular/core';
import { IgxGridBaseDirective, IgxGridComponent, IGX_GRID_BASE } from 'igniteui-angular';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[igxPreventDocumentScroll]'
})
export class IgxPreventDocumentScrollDirective implements AfterViewInit, OnDestroy {
    private _preventScroll = true;
    private gridBody: HTMLElement;

    /**
     *  A boolean indicating if page scroll should be prevented while mouse wheeling over the grid,
     * when grid scroll has reached top or bottom. Defaults to true.
     * ```html
     * <igx-grid igxPreventDocumentScroll></igx-grid>
     * <igx-grid [igxPreventDocumentScroll]='false'></igx-grid>
     * ```
     */
    @Input('igxPreventDocumentScroll')
    public set preventScroll(val: boolean) {
        // eslint-disable-next-line no-underscore-dangle
        if (val === false) { this._preventScroll = false; }
    }

    /**
     * @hidden
     */
    constructor(@Host() @Optional() @Inject(IGX_GRID_BASE) private grid: IgxGridBaseDirective) {
        this.gridBody = this.getGridBody();
    }

    public ngAfterViewInit() {
        // eslint-disable-next-line no-underscore-dangle
        if (this._preventScroll) {
            this.gridBody.addEventListener('wheel', this.preventDocumentScroll, { passive: false });
        }
    }

    public ngOnDestroy() {
        this.gridBody.removeEventListener('wheel', this.preventDocumentScroll);
    }

    /**
     * Prevents scrolling the page, when mouse wheel over the grid body.
     */
    private preventDocumentScroll(event) {
        event.preventDefault();
    }

    private getGridBody(): HTMLElement {
        return this.grid.nativeElement;
    }
}

/**
 * @hidden
 */
@NgModule({
    declarations: [IgxPreventDocumentScrollDirective],
    exports: [IgxPreventDocumentScrollDirective]
})

export class IgxPreventDocumentScrollModule { }
