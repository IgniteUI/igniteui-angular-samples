import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import { IgxCardComponent, IgxCardContentDirective, IgxCardActionsComponent } from 'igniteui-angular/card';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-overview',
    styleUrls: ['./color-picker-overview.component.scss'],
    templateUrl: './color-picker-overview.component.html',
    imports: [
        FormsModule,
        IgxCardComponent,
        IgxCardContentDirective,
        IgxCardActionsComponent,
        IgxButtonDirective,
        IgxIconButtonDirective,
        IgxIconComponent,
        IgxSelectComponent,
        IgxSelectItemComponent,
        IgxLabelDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerOverviewComponent {
    @ViewChild('picker', { static: true })
    public picker!: ElementRef<IgcColorPickerComponent>;

    public paintTypes = ['Matte', 'Satin', 'Eggshell', 'Gloss'];
    public paintQuantities = ['1 litre', '3 litres', '5 litres', '10 litres'];

    public resetColor(): void {
        this.picker.nativeElement.value = '';
    }
}
