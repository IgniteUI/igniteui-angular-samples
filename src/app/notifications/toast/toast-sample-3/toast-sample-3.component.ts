import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-toast-sample-3',
    styleUrls: ['./toast-sample-3.component.scss'],
    templateUrl: './toast-sample-3.component.html',
    imports: [IgxButtonDirective, IgxToastComponent, IgxIconComponent]
})

export class ToastSample3Component { }
