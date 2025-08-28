import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  ColumnPinningPosition,
  IgxColumnComponent,
  IgxTreeGridComponent,
  IPinningConfig,
  IgxGridToolbarComponent,
  IgxGridToolbarActionsComponent,
  IgxGridToolbarPinningComponent,
  IgxDropDownComponent,
  IgxDropDownItemComponent,
  IgxButtonDirective,
  IgxToggleActionDirective,
  IgxDropDownItemNavigationDirective
} from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
  encapsulation: ViewEncapsulation.None,
  providers: [],
  selector: 'app-tree-grid-sample',
  styleUrls: ['tree-grid-both-sides-pinning.component.scss'],
  templateUrl: 'tree-grid-both-sides-pinning.component.html',
  imports: [
    IgxTreeGridComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarActionsComponent,
    IgxColumnComponent,
    IgxButtonDirective
  ]
})
export class TreeGridBothSidesPinningSampleComponent implements OnInit {
  @ViewChild('grid1', { static: true })
  public grid1: IgxTreeGridComponent;
  @ViewChild('pinTemplate', { read: TemplateRef, static: true })
  public pinTemplate: TemplateRef<any>;

  public data: any[];
  public columns: any[];
  public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

  private _columnsPinned = true;

  public ngOnInit(): void {
    this.data = generateEmployeeDetailedFlatData();
  }

  public toggleColumnPinning(col: IgxColumnComponent): void {
    col.pinned ? col.unpin() : col.pin();
  }

  public setPinningPosition(side: 'start' | 'end'): void {
    const pos = side === 'start' ? ColumnPinningPosition.Start : ColumnPinningPosition.End;
    this.pinningConfig = { columns: pos };
  }

  public get columnsPinned(): boolean {
    return this._columnsPinned;
  }

  public set columnsPinned(pinned) {
    this._columnsPinned = !this._columnsPinned;
  }

  public pinLeft(){
    this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
        col.pinningPosition = ColumnPinningPosition.Start;
        col.pinned = true;
    });
  }
    public pinRight(){
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.pinningPosition = ColumnPinningPosition.End;
            col.pinned = true;
        });
  }

  public unpinColumn(){
    this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
        col.pinned = false;
    });
  }
}
