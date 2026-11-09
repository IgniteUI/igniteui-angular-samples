import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-value',
    styleUrls: ['./color-picker-value.component.scss'],
    templateUrl: './color-picker-value.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerValueComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    }
}
