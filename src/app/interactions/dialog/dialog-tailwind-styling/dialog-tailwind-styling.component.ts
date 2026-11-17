import { Component, ViewEncapsulation } from '@angular/core';
import { IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective } from 'igniteui-angular/dialog';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-dialog-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./dialog-tailwind-styling.component.scss'],
    templateUrl: './dialog-tailwind-styling.component.html',
    imports: [
        IgxButtonDirective,
        IgxIconButtonDirective,
        IgxDialogComponent,
        IgxDialogTitleDirective,
        IgxDialogActionsDirective,
        IgxIconComponent
    ]
})
export class DialogTailwindStylingComponent { }
