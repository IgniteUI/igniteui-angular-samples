import { AfterViewInit, Component, ElementRef, Input, ViewChild } from "@angular/core";
import {
    AutoPositionStrategy, CloseScrollStrategy,
    HorizontalAlignment, IgxGridComponent, IgxToggleDirective, VerticalAlignment
} from "igniteui-angular";
import { noop, Subject } from "rxjs";
import { debounceTime, takeUntil, tap } from "rxjs/operators";
@Component({
    selector: "igx-context-menu",
    templateUrl: "./context-menu.component.html",
    styleUrls: ["./context-menu.component.scss"]
})
export class IgxContextMenuComponent implements AfterViewInit {

    @ViewChild(IgxToggleDirective) public igxToggle: IgxToggleDirective;
    @ViewChild("btn") public button: ElementRef;

    @Input()
    public showContextMenu = false;

    @Input()
    public options = {
        textFormatting: true,
        chartCreation: true
    };

    @Input()
    public grid: IgxGridComponent;

    @Input()
    public textFormatters;

    @Input()
    public chartTypes;

    public contextmenuX;
    public contextmenuY;
    protected destroy$ = new Subject<any>();
    private rowIndex;
    private colIndex;
    private get lastSelectedRange() {
        const range = this.grid.getSelectedRanges();
        return range.pop();
    }
    private get  positionStrategy() {
        return { verticalStartPoint: VerticalAlignment.Bottom,
                 horizontalDirection: HorizontalAlignment.Center,
                 horizontalStartPoint: HorizontalAlignment.Center,
                 target: undefined };
    }
    private _overlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        scrollStrategy: new CloseScrollStrategy(),
        positionStrategy: new AutoPositionStrategy(this.positionStrategy)
    };

    public ngAfterViewInit() {
        this.grid.onRangeSelection
            .pipe(tap(() => this.showContextMenu ? this.disableContextMenu() : noop()), debounceTime(200))
            .subscribe(() => {
                this.renderButton();
            });
        this.grid.onDataPreLoad.pipe(
            tap(() => this.showContextMenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            takeUntil(this.destroy$))
            .subscribe(() => !this.showContextMenu ? this.renderButton() : noop());
        this.grid.parentVirtDir.onChunkLoad.pipe(
            tap(() => this.showContextMenu ? this.disableContextMenu() : noop()),
            debounceTime(250),
            takeUntil(this.destroy$))
            .subscribe(() => this.renderButton());
    }

    public ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

    public toggle() {
        this._overlaySettings.positionStrategy.settings.target = this.button.nativeElement;
        this.igxToggle.toggle(this._overlaySettings);

    }

    private renderButton() {
        if (!this.lastSelectedRange) { return; }
        this.rowIndex = this.lastSelectedRange.rowEnd;
        this.colIndex = this.lastSelectedRange.columnEnd;
        while (this.colIndex >= 0 && !this.grid.navigation.isColumnFullyVisible(this.colIndex)) {
            this.colIndex--;
        }
        if (this.colIndex < 0) { return; }

        let cell;
        const length = this.grid.rowList.length;
        if (this.grid.navigation.shouldPerformVerticalScroll(this.rowIndex, -1)) {
            const lastFullyVisibleRowIndex = this.grid.rowList.toArray()[length - 3].index;
            const field = this.grid.visibleColumns[this.colIndex].field;
            cell = this.grid.getCellByColumn(lastFullyVisibleRowIndex, field);
        } else {
            cell = this.grid.getCellByColumn(this.rowIndex, this.grid.visibleColumns[this.colIndex].field);
        }
        this.contextmenuX = cell.element.nativeElement.getClientRects()[0].right;
        this.contextmenuY = cell.element.nativeElement.getClientRects()[0].bottom;
        this.showContextMenu = this.isWithInRange(cell.rowIndex, cell.visibleColumnIndex);
    }

    private disableContextMenu() {
        this.showContextMenu = false;

    }

    private isWithInRange(rInex, cIndex) {
        return true;
    }

}
