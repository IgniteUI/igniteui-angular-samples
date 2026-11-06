import { Component } from '@angular/core';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent, IgxTabsHeaderPosition } from 'igniteui-angular/tabs';

interface Section {
    label: string;
    text: string;
}

@Component({
    selector: 'app-tabs-header-position',
    styleUrls: ['./tabs-header-position.component.scss'],
    templateUrl: './tabs-header-position.component.html',
    imports: [IgxButtonGroupComponent, IgxButtonDirective, IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabContentComponent]
})
export class TabsHeaderPositionComponent {
    public headerPosition: IgxTabsHeaderPosition = IgxTabsHeaderPosition.start;

    public positions: { label: string; value: IgxTabsHeaderPosition }[] = [
        { label: 'Top', value: IgxTabsHeaderPosition.top },
        { label: 'Start', value: IgxTabsHeaderPosition.start },
        { label: 'End', value: IgxTabsHeaderPosition.end }
    ];

    public sections: Section[] = [
        { label: 'Profile', text: 'Update your name, photo, and contact details.' },
        { label: 'Security', text: 'Change your password and sign-in options.' },
        { label: 'Notifications', text: 'Choose which updates you receive by email.' }
    ];
}
