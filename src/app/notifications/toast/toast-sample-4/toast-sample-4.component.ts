import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxToastComponent } from 'igniteui-angular/toast';

@Component({
    selector: 'app-toast-sample-4',
    styleUrls: ['./toast-sample-4.component.scss'],
    templateUrl: './toast-sample-4.component.html',
    imports: [IgxButtonDirective, IgxToastComponent]
})
export class ToastSample4Component { }
