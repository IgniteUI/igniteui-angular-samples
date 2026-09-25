import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-styling',
    styleUrls: ['./color-picker-styling.component.scss'],
    templateUrl: './color-picker-styling.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerStylingComponent {}
