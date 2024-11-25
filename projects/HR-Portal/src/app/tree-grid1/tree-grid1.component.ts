import { Component, OnInit } from '@angular/core';
import { Employee, EMPLOYEE_DATA } from './localData';
import { IgxTreeGridComponent, IgxColumnComponent, IgxAvatarComponent, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent, IgxGridToolbarExporterComponent, IgxCellTemplateDirective } from '@infragistics/igniteui-angular';


@Component({
  selector: 'app-tree-grid1',
  templateUrl: './tree-grid1.component.html',
  styleUrls: ['./tree-grid1.component.scss'],
  standalone: true,
  imports: [IgxTreeGridComponent,
    IgxColumnComponent,
    IgxAvatarComponent,
    IgxPaginatorComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarAdvancedFilteringComponent,
    IgxGridToolbarPinningComponent,
    IgxGridToolbarTitleComponent,
    IgxGridToolbarExporterComponent,
    IgxCellTemplateDirective]
})
export class TreeGrid1Component implements OnInit {
  public localData: Employee[] = [];
  title = 'tree-grid1';

  ngOnInit() {
    this.localData = EMPLOYEE_DATA;
  }
}
