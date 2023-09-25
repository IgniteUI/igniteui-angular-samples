import { Injectable } from '@angular/core';
import { IgxDropDownComponent, IgxDropDownItemComponent } from 'igniteui-angular';

@Injectable()
export class MultiLevelService {
  private _dropdowns: IgxDropDownComponent[] = [];

  private _categories: string[] = [
    'Web',
    'Desktop',
    'Cross Platform',
    'Design to Code',
    'Testing Tools',
    'Ignite UI'
  ];

  public get categories(): string[] {
    return this._categories;
  }

  public add(dropdown: IgxDropDownComponent): void {
    this._dropdowns.push(dropdown);
  }

  public isMultiLevel(dropdown: IgxDropDownComponent): boolean {
    return this._dropdowns.some((d) => d.id === dropdown.id);
  }

  public handleSelection(args?: any): void {
    // do not close the main dropdown if a host item is selected
    if (args && args.event) {
      const target = args.event.composedPath()
        .find((e) => (e as HTMLElement).tagName?.toLowerCase() === 'igx-drop-down-item');

      if (target?.hasAttribute('multiLevel')) {
        args.cancel = true;
      }

    } else {
      // close all inner dropdowns on selection
      this._dropdowns.forEach((dropdown) => {
        if (!dropdown.collapsed) {
          dropdown.close();
        }
      });
    }
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
