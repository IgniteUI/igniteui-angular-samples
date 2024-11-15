import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IgxCheckboxComponent } from 'igniteui-angular';

@Component({
    selector: 'app-checkbox-sample-2',
    styleUrls: ['./checkbox-sample-2.component.scss'],
    templateUrl: './checkbox-sample-2.component.html',
    imports: [NgFor, IgxCheckboxComponent]
})
export class CheckboxSample2Component {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];
}
