import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListThumbnailDirective } from 'igniteui-angular/list';

interface ShoppingItem {
    label: string;
    checked: boolean;
}

interface ShoppingGroup {
    title: string;
    items: ShoppingItem[];
}

@Component({
    selector: 'app-checkbox-overview',
    styleUrls: ['./checkbox-overview.component.scss'],
    templateUrl: './checkbox-overview.component.html',
    imports: [
        FormsModule,
        IgxCheckboxComponent,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListActionDirective,
        IgxIconButtonDirective,
        IgxButtonDirective,
        IgxIconComponent
    ]
})
export class CheckboxOverviewComponent {
    public groups: ShoppingGroup[] = [
        {
            title: 'Grocery store',
            items: [
                { label: 'Bread', checked: false },
                { label: 'Milk 4l', checked: false },
                { label: 'Eggs 1 pack', checked: true }
            ]
        },
        {
            title: 'Fruit and vegetable shop',
            items: [
                { label: 'Strawberries', checked: false },
                { label: 'Lemons', checked: false },
                { label: 'Single Line Item', checked: true }
            ]
        }
    ];
}
