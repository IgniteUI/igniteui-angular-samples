import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxToastComponent } from 'igniteui-angular/toast';

@Component({
    selector: 'app-toast-sample-2',
    styleUrls: ['./toast-sample-2.component.scss'],
    templateUrl: './toast-sample-2.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxButtonDirective, IgxToastComponent]
})

export class ToastSample2Component { }
