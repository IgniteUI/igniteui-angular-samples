import {Component} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-expansion-styling',
    styleUrls: ['./expansion-styling.component.scss'],
    templateUrl: './expansion-styling.component.html',
    standalone: false
})

export class ExpansionPanelStylingComponent {
    public imgSource = 'https://i.ibb.co/6ZdY7cn/Untitled-design-3.png';
    public readMore = 'https://en.wikipedia.org/wiki/Golden_Retriever';
}
