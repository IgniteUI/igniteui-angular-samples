import { Component, ViewChild } from '@angular/core';
import { IgxSelectComponent, IgxLabelDirective, IgxPrefixDirective, IgxSuffixDirective, IgxIconComponent, IgxHintDirective, IgxSelectItemComponent } from 'igniteui-angular';
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
