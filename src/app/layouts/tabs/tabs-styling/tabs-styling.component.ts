import { Component, ViewEncapsulation } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

interface ProfileDetail {
    label: string;
    value: string;
}

interface ProfileSection {
    label: string;
    disabled?: boolean;
    details: ProfileDetail[];
}

@Component({
    selector: 'app-tabs-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./tabs-styling.component.scss'],
    templateUrl: './tabs-styling.component.html',
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
        IgxListLineSubTitleDirective,
        IgxListActionDirective,
        IgxAvatarComponent,
        IgxChipComponent
    ]
})
export class TabsStylingComponent {
    public sections: ProfileSection[] = [
        {
            label: 'Overview',
            details: [
                { label: 'Email', value: 'emily.carter@gmail.com' },
                { label: 'Team', value: 'Finance, 8 members' },
                { label: 'Joined', value: 'March 2023' }
            ]
        },
        {
            label: 'Activity',
            details: [
                { label: 'Last login', value: 'Today, 09:24' },
                { label: 'Reports', value: '12 this month' },
                { label: 'Approvals', value: '3 pending' }
            ]
        },
        {
            label: 'Billing',
            disabled: true,
            details: []
        }
    ];
}
