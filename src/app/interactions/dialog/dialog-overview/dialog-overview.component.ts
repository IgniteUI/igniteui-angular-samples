import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxDialogActionsDirective, IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-dialog-overview',
    styleUrls: ['./dialog-overview.component.scss'],
    templateUrl: './dialog-overview.component.html',
    imports: [IgxButtonDirective, IgxDialogComponent, IgxDialogActionsDirective]
})
export class DialogOverviewComponent {
    public isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

    public positionSettings: PositionSettings = {
        verticalDirection: VerticalAlignment.Top
    };
}
