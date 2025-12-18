import { Component, ViewChild } from '@angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxHintDirective, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-select-input-directives',
    styleUrls: ['select-input-directives.scss'],
    templateUrl: 'select-input-directives.html',
    imports: [IgxSelectComponent, FormsModule, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxSelectItemComponent]
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
