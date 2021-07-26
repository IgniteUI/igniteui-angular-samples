import { Component, ViewChild, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { IDragMoveEventArgs, IgxGridComponent, RowType, IRowDragStartEventArgs, Point } from 'igniteui-angular';
import { DATA } from '../../data/customers';
import { Subject, interval, Observable, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-grid-drop-indicator',
    styleUrls: ['grid-drop-indicator.scss'],
    templateUrl: 'grid-drop-indicator.html'
})
export class GridDropIndicatorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('grid', { read: IgxGridComponent, static: true })
  public grid: IgxGridComponent;
  public data: any[];
  private destroy$ = new Subject();
  private intervalSub: Subscription;
  private interval$: Observable<number>;
  private _draggedRow: any;
  private highlightedRow: HTMLElement;

  constructor(private renderer: Renderer2) {
    this.data = DATA;
  }

  public onDropAllowed(args): void {
    const event = args.originalEvent;
    const currRowIndex = this.getRowIndexAtPoint(this.grid.rowList.toArray(), {
      x: event.clientX,
      y: event.clientY
    });
    if (currRowIndex === -1) {
      return;
    }
    // remove the row that was dragged and place it onto its new location
    this.grid.deleteRow(this._draggedRow[this.grid.primaryKey]);
    this.data.splice(currRowIndex, 0, this._draggedRow);
    this.clearHighlightElement();
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public ngAfterViewInit() {
    this.grid.rowDragStart
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.handleRowStart.bind(this));
    this.grid.rowDragEnd
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.unsubInterval());
  }

  private getRowIndexAtPoint(
    rowList: any[],
    cursorPosition: Point
  ): number {
    for (const row of rowList) {
      const rowRect = row.nativeElement.getBoundingClientRect();
      if (
        cursorPosition.y > rowRect.top + window.scrollY &&
        cursorPosition.y < rowRect.bottom + window.scrollY &&
        cursorPosition.x > rowRect.left + window.scrollX &&
        cursorPosition.x < rowRect.right + window.scrollX
      ) {
        // return the index of the targeted row
        return this.data.indexOf(this.data.find(r => r.ID === row.rowID));
      }
    }

    return -1;
  }

  /**
   * Unsubs from the autoscroll interval
   */
  private unsubInterval(): void {
    if (this.intervalSub) {
      this.intervalSub.unsubscribe();
      this.intervalSub = null;
    }
  }

  /**
   * Handles the grid.onRowDragStart event
   */
  private handleRowStart(e: IRowDragStartEventArgs): void {
    if (e !== null) {
      this._draggedRow = e.dragData.data;
    }
    const directive = e.dragDirective;
    directive.dragMove
      .pipe(takeUntil(this.grid.rowDragEnd))
      .subscribe(this.handleDragMove.bind(this));
  }

  /**
   * Handles the onDragMove event
   */
  private handleDragMove(event: IDragMoveEventArgs): void {
    this.handleOver(event);
    this.unsubInterval();
    const dir = this.isPointOnGridEdge(event.pageY);
    if (!dir) {
      return;
    }
    this.scrollGrid(dir);
    if (!this.intervalSub) {
      this.interval$ = interval(500);
      this.intervalSub = this.interval$.subscribe(() => this.scrollGrid(dir));
    }
  }

  /**
   * Returns if the point is on the upper (-1) or lower (1) edge of a rectangle
   */
  private isPointOnGridEdge(pageY: number): 1 | -1 {
    const rect: ClientRect = this.grid.nativeElement
      .querySelector('.igx-grid__tbody')
      .getBoundingClientRect();
    if (pageY >= rect.bottom) {
      return 1;
    } else if (pageY <= rect.top) {
      return -1;
    }
  }

  /**
   * Checks if the grid is scrolled to its upper (-1) or lower (1) edge
   */
  private isGridScrolledToEdge(dir: 1 | -1): boolean {
    if (this.grid.data[0] === this.grid.rowList.first.data && dir === -1) {
      return true;
    }
    if (
      this.grid.data[this.grid.data.length - 1] ===
        this.grid.rowList.last.data &&
      dir === 1
    ) {
      return true;
    }
    return false;
  }

  /**
   * Attempts to scroll the grid in target direction
   *
   * Returns whether the grid was scrolled
   */
  private scrollGrid(dir: 1 | -1): void {
    if (!this.isGridScrolledToEdge(dir)) {
      if (dir === 1) {
        this.grid.verticalScrollContainer.scrollNext();
      } else {
        this.grid.verticalScrollContainer.scrollPrev();
      }
    }
  }

  private handleOver(event: IDragMoveEventArgs) {
    const ghostRect = event.owner.ghostElement.getBoundingClientRect();
    const rowIndex = this.getRowIndexAtPoint(this.grid.rowList.toArray(), {
      x: ghostRect.x,
      y: ghostRect.y
    });
    if (rowIndex === -1) {
      return;
    }
    const rowElement = this.grid.rowList.find(
      e => e.key === this.grid.data[rowIndex].key
    );
    if (rowElement) {
      this.changeHighlightedElement(rowElement.element.nativeElement);
    }
  }

  private clearHighlightElement(): void {
    if (this.highlightedRow !== undefined) {
      this.renderer.removeClass(this.highlightedRow, 'underlined-class');
    }
  }
  private setHightlightElement(newElement: HTMLElement) {
      console.log(newElement);
    this.renderer.addClass(newElement, 'underlined-class');
    this.highlightedRow = newElement;
  }

  private changeHighlightedElement(newElement: HTMLElement) {
    if (newElement !== undefined) {
      if (newElement !== this.highlightedRow) {
        this.clearHighlightElement();
        this.setHightlightElement(newElement);
      } else {
        return;
      }
    }
  }
}
