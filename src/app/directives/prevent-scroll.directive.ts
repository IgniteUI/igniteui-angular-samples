import { AfterViewInit, Directive, Input, OnDestroy, inject } from '@angular/core';
import { GridType, IGX_GRID_BASE } from 'igniteui-angular';

@Directive({
    selector: '[igxPreventDocumentScroll]'
})
export class IgxPreventDocumentScrollDirective implements AfterViewInit, OnDestroy {
    private grid = inject<GridType>(IGX_GRID_BASE, { host: true, optional: true });

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
        if (val === false) { this._preventScroll = false; }
    }

    public ngAfterViewInit() {
        this.gridBody = this.getGridTBody();
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

    private getGridTBody(): HTMLElement {
        return this.grid.tbody.nativeElement;
    }
}
