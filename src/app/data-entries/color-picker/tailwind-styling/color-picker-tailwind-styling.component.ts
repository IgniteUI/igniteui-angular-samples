import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcColorPickerComponent } from 'igniteui-webcomponents';
import { IgxCardComponent, IgxCardContentDirective } from 'igniteui-angular/card';
import { IgxButtonDirective, IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxChipComponent } from 'igniteui-angular/chips';

defineComponents(IgcColorPickerComponent);

const defaults = {
    background: '#1a314a',
    text: '#e5ebf3',
    accent: '#f9592a',
    border: '#00142b'
};

@Component({
    selector: 'app-color-picker-tailwind-styling',
    styleUrls: ['./color-picker-tailwind-styling.component.scss'],
    templateUrl: './color-picker-tailwind-styling.component.html',
    imports: [
        IgxCardComponent,
        IgxCardContentDirective,
        IgxButtonDirective,
        IgxIconButtonDirective,
        IgxRippleDirective,
        IgxIconComponent,
        IgxChipComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ColorPickerTailwindStylingComponent {
    public background = defaults.background;
    public text = defaults.text;
    public accent = defaults.accent;
    public border = defaults.border;

    public onBackgroundInput(event: Event): void {
        this.background = (event as CustomEvent<string>).detail;
    }

    public onTextInput(event: Event): void {
        this.text = (event as CustomEvent<string>).detail;
    }

    public onAccentInput(event: Event): void {
        this.accent = (event as CustomEvent<string>).detail;
    }

    public onBorderInput(event: Event): void {
        this.border = (event as CustomEvent<string>).detail;
    }

    public reset(): void {
        this.background = defaults.background;
        this.text = defaults.text;
        this.accent = defaults.accent;
        this.border = defaults.border;
    }
}
