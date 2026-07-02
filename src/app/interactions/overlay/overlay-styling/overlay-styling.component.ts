import { Component, ElementRef, inject } from '@angular/core';
import { IgxOverlayService } from 'igniteui-angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-overlay-styling',
    styleUrls: ['overlay-styling.component.scss'],
    templateUrl: 'overlay-styling.component.html',
    imports: [IgxComboComponent, FormsModule]
})
export class OverlayStylingComponent {
    element = inject(ElementRef);
    private overlayService = inject(IgxOverlayService);

    public items = [{
            name: 'Option 1',
            id: 0
        }, {
            name: 'Option 2',
            id: 1
        }, {
            name: 'Option 3',
            id: 2
        }, {
            name: 'Option 4',
            id: 3
        }, {
            name: 'Option 5',
            id: 4
        }, {
            name: 'Option 6',
            id: 5
        }
    ];
}
