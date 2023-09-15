import { Injectable } from '@angular/core';
import { IgxDropDownComponent, IgxDropDownItemComponent } from 'igniteui-angular';

@Injectable()
export class MultiLevelService {
  private _dropdowns: IgxDropDownComponent[] = [];

  public add(dropdown: IgxDropDownComponent): void {
    this._dropdowns.push(dropdown);
  }

  public handleHover(
    event: any,
    host: IgxDropDownItemComponent,
    dropdown: IgxDropDownComponent
  ): void {
    const target = event.relatedTarget;

    // hover outside of dropdown -> close all inner dropdowns
    if (!target?.id) {
      this._dropdowns.forEach((d) => {
        if (!d.collapsed) {
          d.close();
        }
      });

    } else if (target?.hasAttribute('multiLevel') && target?.id !== host.id) {
      // hover back to parent dropdown
      // if the target is not the host -> close inner dropdown
      dropdown.close();
    }
  }
}
