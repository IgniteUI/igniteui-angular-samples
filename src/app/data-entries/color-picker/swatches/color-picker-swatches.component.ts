import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';

defineComponents(IgcColorPickerComponent);

@Component({
    selector: 'app-color-picker-swatches',
    styleUrls: ['./color-picker-swatches.component.scss'],
    templateUrl: './color-picker-swatches.component.html',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ColorPickerSwatchesComponent implements AfterViewInit {
    public oneLineSwatches = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50'];

    public multiLineSwatches = [
        '#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50', '#ffeb3b', '#ff9800', '#795548', '#607d8b', '#ffffff', '#000000', '#0000ff', '#00ff00', '#ff00ff', '#00ffff', '#ff0000', '#ffff00', '#ff00ff', '#00ffff', '#c0c0c0', '#808080', '#800000', '#808000'
    ];

    @ViewChild('colorPicker1', { static: true })
    colorPicker1!: ElementRef<IgcColorPickerComponent>;

    @ViewChild('colorPicker2', { static: true })
    colorPicker2!: ElementRef<IgcColorPickerComponent>;

    ngAfterViewInit() {
        this.colorPicker1.nativeElement.toggle();
        this.colorPicker2.nativeElement.toggle();
    }
}
