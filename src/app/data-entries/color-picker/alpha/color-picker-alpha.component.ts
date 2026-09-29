import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-alpha',
    styleUrls: ['./color-picker-alpha.component.scss'],
    templateUrl: './color-picker-alpha.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerAlphaComponent implements AfterViewInit {
    @ViewChild('colorPicker', { static: true })
    colorPicker!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker.nativeElement.toggle();
    }
}
