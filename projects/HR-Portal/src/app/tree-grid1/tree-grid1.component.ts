import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { Employee, EMPLOYEE_DATA } from './localData';
import { IgxTreeGridComponent, IgxColumnComponent, IgxAvatarComponent, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarAdvancedFilteringComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent, IgxGridToolbarExporterComponent, IgxCellTemplateDirective, IgxIconComponent, IgxIconModule, IgxIconService, IgxButtonGroupComponent, IgxIconButtonDirective, IgxButtonModule } from '@infragistics/igniteui-angular';
import ResizeObserver from 'resize-observer-polyfill';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



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
    IgxCellTemplateDirective,
    IgxIconModule,
    IgxIconComponent,
    IgxIconButtonDirective,
    IgxGridToolbarHidingComponent,
    IgxButtonModule,
    CommonModule
    ]
})
export class TreeGrid1Component implements OnInit, AfterViewInit {
  public localData: Employee[] = [];
  title = 'HR Portal - IgniteUI for Angular';
  @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true })
  public treeGrid!: IgxTreeGridComponent;
  public formatOptions ={
    format: 'currency',
    timezone: 'GMT'
  }

  constructor(private iconService: IgxIconService, private http: HttpClient) { }


  ngOnInit() {
    this.localData = EMPLOYEE_DATA;
    this.iconService.addSvgIcon('linkedIn', 'assets/images/others/linkedin.svg', 'hr-icons');
    this.iconService.addSvgIcon('USA', 'assets/images/countries/United States.svg', 'country-icons');
    this.iconService.addSvgIcon('CAN', 'assets/images/countries/Canada.svg', 'country-icons');
    this.iconService.addSvgIcon('GBR', 'assets/images/countries/United Kingdom.svg', 'country-icons');
    this.iconService.addSvgIcon('DEU', 'assets/images/countries/Germany.svg', 'country-icons');
    this.iconService.addSvgIcon('FRA', 'assets/images/countries/France.svg', 'country-icons');
    this.iconService.addSvgIcon('ESP', 'assets/images/countries/Spain.svg', 'country-icons');
    this.iconService.addSvgIcon('ITA', 'assets/images/countries/Italy.svg', 'country-icons');
    this.iconService.addSvgIcon('AUS', 'assets/images/countries/Australia.svg', 'country-icons');
    this.iconService.addSvgIcon('JPN', 'assets/images/countries/Japan.svg', 'country-icons');
    this.iconService.addSvgIcon('ARE', 'assets/images/countries/uae.svg', 'country-icons');

  }

  ngAfterViewInit() {
  }
}
