import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ISelectionEventArgs, IgxDropDownComponent, IgxDropDownGroupComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { getHeroClassData, IHeroClass } from '../../../data/heroData';


@Component({
    selector: 'app-dropdown-styling',
    styleUrls: ['./dropdown-styling.component.scss'],
    templateUrl: './dropdown-styling.component.html',
    imports: [IgxButtonDirective, IgxToggleActionDirective, IgxDropDownItemNavigationDirective, IgxDropDownComponent, IgxDropDownGroupComponent, IgxDropDownItemComponent]
})
export class DropDownStylingComponent implements OnInit {
    elem = inject(ElementRef);

    @ViewChild('button', { static: true }) public button: ElementRef;
    public heroClasses: IHeroClass[] = [];
    public hero = 'Choose your hero';

    public ngOnInit() {
        this.heroClasses = getHeroClassData();
    }

    public handleDropDownSelection(event: ISelectionEventArgs) {
        this.hero = event.newSelection.value;
    }
}
