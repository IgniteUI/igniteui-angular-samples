import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { IgxDropDownComponent, IgxDropDownItemComponent } from 'igniteui-angular/drop-down';
import { ConnectedPositioningStrategy, HorizontalAlignment, OverlaySettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxNavbarComponent, IgxNavbarTitleDirective } from 'igniteui-angular/navbar';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxSuffixDirective } from 'igniteui-angular/input-group';
import {
  CROSS_PLATFORM_DATA,
  DESIGN_TO_CODE_DATA,
  DESKTOP_DATA,
  IGNITE_UI_DATA,
  SUPPORT_DATA,
  TESTING_TOOLS_DATA
} from './data';
import { MultiLevelService } from './multi-level.service';
import { MultiLevelDirective } from './multi-level.directive';


@Component({
    selector: 'app-dropdown-multi-level-menu',
    templateUrl: './dropdown-multi-level-menu.component.html',
    styleUrls: ['./dropdown-multi-level-menu.component.scss'],
    providers: [MultiLevelService],
    imports: [IgxNavbarComponent, IgxNavbarTitleDirective, IgxButtonDirective, IgxToggleActionDirective, IgxIconComponent, IgxDropDownComponent, IgxDropDownItemComponent, MultiLevelDirective, IgxSuffixDirective]
})
export class DropdownMultiLevelMenuComponent implements AfterViewInit {
  private _multiLevelService = inject(MultiLevelService);

  @ViewChildren(IgxDropDownComponent, { read: IgxDropDownComponent })
  private _dropdowns: QueryList<IgxDropDownComponent>;

  @ViewChild('dropdown1', { read: IgxDropDownComponent })
  private _multiLevelDropdown: IgxDropDownComponent;

  public supportData: string[] = SUPPORT_DATA;
  public desktopData: string[] = DESKTOP_DATA;
  public crossPlatformData: string[] = CROSS_PLATFORM_DATA;
  public designToCodeData: string[] = DESIGN_TO_CODE_DATA;
  public testingToolsData: string[] = TESTING_TOOLS_DATA;
  public igniteUIData: string[] = IGNITE_UI_DATA;

  public overlaySettings: OverlaySettings = {
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalStartPoint: HorizontalAlignment.Center,
      horizontalDirection: HorizontalAlignment.Center,
      verticalStartPoint: VerticalAlignment.Bottom,
      closeAnimation: undefined
    })
  };

  public selection: string = '';

  public ngAfterViewInit(): void {
    this._dropdowns.forEach((dropdown) => {
      dropdown.selectionChanging.subscribe((args) => {
        args.cancel = true;
        const value = args.newSelection.value;
        const categories = this._multiLevelService.categories;

        if (categories.includes(value)) {
          this.selection = '';
          return;
        }

        if (this._multiLevelService.isMultiLevel(dropdown)) {
          this._multiLevelService.handleSelection();
        } else {
          dropdown.close();
        }

        this.selection = value;
      });
    });

    this._multiLevelDropdown.closing.subscribe((args) => {
        this._multiLevelService.handleClosing(args);
    });
  }
}
