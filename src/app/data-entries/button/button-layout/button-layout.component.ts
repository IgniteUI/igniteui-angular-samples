import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-layout',
    styleUrls: ['./button-layout.component.scss'],
    templateUrl: './button-layout.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, TitleCasePipe]
})
export class ButtonLayoutComponent {
    public variants = ['contained', 'outlined', 'flat', 'fab'];
    public variant = 'contained';

    public onVariantChange(event: Event) {
        this.variant = (event.target as HTMLSelectElement).value;
    }
}
