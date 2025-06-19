import { AfterViewInit, Component,ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { IBaseChipEventArgs, IgxDropDownComponent, OverlaySettings, IgxTreeGridComponent, IRowSelectionEventArgs, ConnectedPositioningStrategy, IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxChipsAreaComponent, IgxChipComponent, IgxColumnComponent } from 'igniteui-angular';
import { EMPLOYEE_DATA } from './nested-employee-data';
import { isPlatformBrowser } from '@angular/common';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-tree-grid-hierarchical-selection',
    styleUrls: ['./dropdown-tree-grid-hierarchical-selection.component.scss'],
    templateUrl: './dropdown-tree-grid-hierarchical-selection.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxIconComponent, IgxChipsAreaComponent, IgxChipComponent, IgxDropDownComponent, IgxTreeGridComponent, IgxColumnComponent]
})
export class DropdownTreeGridHierarchicalSelectionComponent implements OnInit, AfterViewInit {
    @ViewChild('treeGrid', { static: true })
    public igxTreeGrid: IgxTreeGridComponent;
    @ViewChild(IgxDropDownComponent, { static: true }) public igxDropDown: IgxDropDownComponent;
    @ViewChild('button', { static: true }) public igxButton: ElementRef;

    public employees!: any[];
    public selectedRows!: any[];

    constructor(@Inject(PLATFORM_ID) private platformId: any) { }

    public ngOnInit(): void {
        this.employees = EMPLOYEE_DATA;

        this.igxTreeGrid.selectRows([1,4], true);
        this.selectedRows = [];
        this.igxTreeGrid.selectedRows.forEach((row) => this.selectedRows.push(this.employees.find(employee => employee.ID == row)));
    }
    public ngAfterViewInit(): void {
        if (isPlatformBrowser(this.platformId)) {
            requestAnimationFrame(() => {
                this._overlaySettings.target = this.igxButton.nativeElement;
                this.igxDropDown.open(this._overlaySettings);
            });
        }
     }
    public onRowSelectionChanging(args: IRowSelectionEventArgs, grid: IgxTreeGridComponent) {
        this.selectedRows = [];
        args.newSelection.forEach((val) => this.selectedRows.push(grid.getRowData(val.ID)));
      }

    public chipRemoved(event: IBaseChipEventArgs) {
        this.selectedRows = this.selectedRows.filter((row) => {
            if (row.ID === event.owner.id){
                this.igxTreeGrid.deselectRows([row.ID]);
            }
            return row.ID !== event.owner.id;
        });
    }

    public _overlaySettings: OverlaySettings = {
        modal: false,
        positionStrategy: new ConnectedPositioningStrategy(),
        closeOnOutsideClick: false
    };
}
