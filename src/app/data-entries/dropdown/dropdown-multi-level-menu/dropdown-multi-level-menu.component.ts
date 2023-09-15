import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import {
  IgxDropDownComponent,
  ISelectionEventArgs,
  OverlaySettings,
  ConnectedPositioningStrategy,
  HorizontalAlignment,
  VerticalAlignment
} from 'igniteui-angular';
import {
  CROSS_PLATFORM_DATA,
  DESIGN_TO_CODE_DATA,
  DESKTOP_DATA,
  IGNITE_UI_DATA,
  SUPPORT_DATA,
  TESTING_TOOLS_DATA
} from './data';
import { MultiLevelService } from './multi-level.service';

@Component({
  selector: 'app-dropdown-multi-level-menu',
  templateUrl: './dropdown-multi-level-menu.component.html',
  styleUrls: ['./dropdown-multi-level-menu.component.scss'],
  providers: [MultiLevelService]
})
export class DropdownMultiLevelMenuComponent implements AfterViewInit {
  @ViewChildren(IgxDropDownComponent, { read: IgxDropDownComponent })
  private _dropdowns!: QueryList<IgxDropDownComponent>;

  private _categories: string[] = [
    'Web',
    'Desktop',
    'Cross Platform',
    'Design to Code',
    'Testing Tools'
  ];

  public supportData: string[] = SUPPORT_DATA;
  public desktopData: string[] = DESKTOP_DATA;
  public crossPlatformData: string[] = CROSS_PLATFORM_DATA;
  public designToCodeData: string[] = DESIGN_TO_CODE_DATA;
  public testingToolsData: string[] = TESTING_TOOLS_DATA;
  public igniteUIData: string[] = IGNITE_UI_DATA;

  public overlaySettings: OverlaySettings = {
    closeOnOutsideClick: true,
    modal: false,
    positionStrategy: new ConnectedPositioningStrategy({
      horizontalStartPoint: HorizontalAlignment.Center,
      horizontalDirection: HorizontalAlignment.Center,
      verticalStartPoint: VerticalAlignment.Bottom
    })
  };

  public text: string = '';

  public ngAfterViewInit(): void {
    this._dropdowns.forEach((dropdown) => {
      dropdown.selectionChanging.subscribe((args: ISelectionEventArgs) => {
        args.cancel = true;
        const value = args.newSelection.value;

        if (this._categories.includes(value)) {
          this.text = '';
          return;
        }

        this.text = value;
        this._dropdowns.forEach((d) => {
          if (!d.collapsed) {
            d.close();
          }
        });
      });
    });
  }
}
