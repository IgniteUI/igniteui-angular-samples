import { Component, ViewChild } from '@angular/core';
import { IgxSelectComponent } from 'igniteui-angular';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'select-input-directives',
    styleUrls: ['select-input-directives.scss'],
    templateUrl: 'select-input-directives.html'
})

export class SelectInputDirectivesComponent {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public selected = '';

    public items: string[] = ['Orange', 'Apple', 'Banana', 'Mango'];

    public clearSelection(event: MouseEvent) {
        this.selected = '';
        // prevent the drop-down container from opening
        event.stopPropagation();
    }
}
