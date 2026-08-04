import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';

@Component({
    selector: 'app-checkbox-sample-1',
    styleUrls: ['./checkbox-sample-1.component.scss'],
    templateUrl: './checkbox-sample-1.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxCheckboxComponent]
})
export class CheckboxSample1Component { }
