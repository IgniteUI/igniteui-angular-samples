import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

interface Person {
    name: string;
    team: string;
    avatar: string;
}

interface Team {
    name: string;
    people: Person[];
}

const people: Person[] = [
    { name: 'Emily Carter', team: 'Finance', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png' },
    { name: 'Jose Diaz', team: 'Engineering', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png' },
    { name: 'Kira Tanaka', team: 'Finance', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png' },
    { name: 'Liam Brooks', team: 'Engineering', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-03.png' }
];

@Component({
    selector: 'app-tabs-overview',
    styleUrls: ['./tabs-overview.component.scss'],
    templateUrl: './tabs-overview.component.html',
    imports: [
        IgxTabsComponent,
        IgxTabItemComponent,
        IgxTabHeaderComponent,
        IgxTabHeaderLabelDirective,
        IgxTabContentComponent,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListLineTitleDirective,
        IgxListActionDirective,
        IgxAvatarComponent
    ]
})
export class TabsOverviewComponent {
    public teams: Team[] = ['Everyone', 'Finance', 'Engineering'].map((name) => ({
        name,
        people: people.filter((person) => name === 'Everyone' || person.team === name)
    }));
}
