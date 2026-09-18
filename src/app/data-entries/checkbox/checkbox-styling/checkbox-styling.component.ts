import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';

interface TeamMember {
    name: string;
    email: string;
    avatar: string;
    selected: boolean;
}

@Component({
    selector: 'app-checkbox-styling',
    styleUrls: ['./checkbox-styling.component.scss'],
    templateUrl: './checkbox-styling.component.html',
    imports: [
        FormsModule,
        IgxCheckboxComponent,
        IgxAvatarComponent,
        IgxListComponent,
        IgxListItemComponent,
        IgxListThumbnailDirective,
        IgxListLineTitleDirective,
        IgxListLineSubTitleDirective,
        IgxListActionDirective,
        IgxButtonDirective
    ]
})
export class CheckboxStylingComponent {
    public members: TeamMember[] = [
        { name: 'Emily Potter', email: 'emily@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-06.png', selected: false },
        { name: 'Alex Lima', email: 'alex@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-05.png', selected: true },
        { name: 'Mateo García', email: 'mateo@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-07.png', selected: false },
        { name: 'Kate Roberts', email: 'kate@team.com', avatar: 'https://dl.infragistics.com/x/img/avatars/avatar-profile-08.png', selected: false }
    ];

    public get allSelected(): boolean {
        return this.members.every((member) => member.selected);
    }

    public get someSelected(): boolean {
        return this.members.some((member) => member.selected);
    }

    public toggleAll(checked: boolean): void {
        this.members.forEach((member) => member.selected = checked);
    }
}
