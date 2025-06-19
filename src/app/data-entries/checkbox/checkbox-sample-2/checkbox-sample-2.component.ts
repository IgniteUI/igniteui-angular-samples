import { Component } from '@angular/core';

import { IgxCheckboxComponent } from 'igniteui-angular';

@Component({
    selector: 'app-checkbox-sample-2',
    styleUrls: ['./checkbox-sample-2.component.scss'],
    templateUrl: './checkbox-sample-2.component.html',
    imports: [IgxCheckboxComponent]
})
export class CheckboxSample2Component {
    public tasks = [
        { done: true, description: 'Research' },
        { done: true, description: 'Implement' },
        { done: false, description: 'Test' }
    ];
}
