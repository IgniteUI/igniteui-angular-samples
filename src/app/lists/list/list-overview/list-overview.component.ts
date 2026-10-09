import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';

@Component({
    selector: 'app-list-overview',
    templateUrl: './list-overview.component.html',
    styleUrls: ['./list-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FormsModule,
        IgxAvatarComponent,
        IgxButtonDirective,
        IgxListActionDirective,
        IgxListComponent,
        IgxListItemComponent,
        IgxListLineSubTitleDirective,
        IgxListLineTitleDirective,
        IgxListThumbnailDirective,
        IgxRadioComponent,
        IgxRadioGroupDirective
    ]
})
export class ListOverviewComponent {
    public listSize = 'medium';

    public contacts = [
        { name: 'Terrance Orta', phone: '770-504-2217', avatar: 'assets/images/avatar/8.jpg' },
        { name: 'Richard Mahoney', phone: '423-676-2869', avatar: 'assets/images/avatar/17.jpg' },
        { name: 'Donna Price', phone: '859-496-2817', avatar: 'assets/images/avatar/9.jpg' }
    ];
}
