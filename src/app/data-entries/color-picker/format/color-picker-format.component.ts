import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-format',
    styleUrls: ['./color-picker-format.component.scss'],
    templateUrl: './color-picker-format.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerFormatComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    } 
}
