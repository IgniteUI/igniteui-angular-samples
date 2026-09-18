import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAccordionComponent } from 'igniteui-angular/accordion';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxExpansionPanelBodyComponent, IgxExpansionPanelComponent, IgxExpansionPanelHeaderComponent, IgxExpansionPanelTitleDirective } from 'igniteui-angular/expansion-panel';

interface FilterOption {
    label: string;
    checked: boolean;
}

interface FilterSection {
    title: string;
    collapsed: boolean;
    options: FilterOption[];
}

@Component({
    selector: 'app-checkbox-tailwind-styling',
    styleUrls: ['./checkbox-tailwind-styling.component.scss'],
    templateUrl: './checkbox-tailwind-styling.component.html',
    imports: [
        FormsModule,
        IgxCheckboxComponent,
        IgxAccordionComponent,
        IgxExpansionPanelComponent,
        IgxExpansionPanelHeaderComponent,
        IgxExpansionPanelTitleDirective,
        IgxExpansionPanelBodyComponent
    ]
})
export class CheckboxTailwindStylingComponent {
    public sections: FilterSection[] = [
        {
            title: 'Brand',
            collapsed: false,
            options: [
                { label: 'Nike', checked: true },
                { label: 'Roxy', checked: false },
                { label: 'Guess', checked: false }
            ]
        },
        {
            title: 'Color',
            collapsed: false,
            options: [
                { label: 'Black', checked: false },
                { label: 'White', checked: true },
                { label: 'Gray', checked: false }
            ]
        },
        {
            title: 'Size',
            collapsed: false,
            options: [
                { label: 'Small', checked: false },
                { label: 'Medium', checked: true },
                { label: 'Large', checked: false },
                { label: 'Extra large', checked: false }
            ]
        }
    ];
}
