import { Component } from '@angular/core';
import { IgxDialogActionsDirective, IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-dialog-types',
    styleUrls: ['./dialog-types.component.scss'],
    templateUrl: './dialog-types.component.html',
    imports: [
        IgxButtonDirective,
        IgxDialogComponent,
        IgxDialogActionsDirective,
        IgxIconComponent,
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxLabelDirective,
        IgxPrefixDirective
    ]
})
export class DialogTypesComponent { }
