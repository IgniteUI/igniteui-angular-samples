import { Component } from '@angular/core';
import { IgxFilterOptions, IgxFilterPipe, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-list-item-selection',
    templateUrl: './list-item-selection.component.html',
    styleUrls: ['./list-item-selection.component.scss'],
    imports: [IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxListComponent, IgxListItemComponent, IgxAvatarComponent, IgxListThumbnailDirective, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxListActionDirective, IgxRippleDirective, IgxFilterPipe]
})
export class ListItemSelectionComponent {
    public searchContact: string;

    public contacts = [
        {
            isFavorite: false,
            name: 'Terrance Orta',
            phone: '770-504-2217',
            photo: 'assets/images/men/27.jpg',
            selected: false
        },
        {
            isFavorite: true,
            name: 'Richard Mahoney',
            phone: '423-676-2869',
            photo: 'assets/images/men/1.jpg',
            selected: false
        },
        {
            isFavorite: false,
            name: 'Donna Price',
            phone: '859-496-2817',
            photo: 'assets/images/women/50.jpg',
            selected: false
        },
        {
            isFavorite: false,
            name: 'Lisa Landers',
            phone: '901-747-3428',
            photo: 'assets/images/women/3.jpg',
            selected: false
        },
        {
            isFavorite: true,
            name: 'Dorothy H. Spencer',
            phone: '573-394-9254',
            photo: 'assets/images/women/67.jpg',
            selected: false
        }
    ];

    public toggleFavorite(contact: any, event: Event) {
        event.stopPropagation();
        contact.isFavorite = !contact.isFavorite;
    }

    get filterContacts() {
        const fo = new IgxFilterOptions();
        fo.key = 'name';
        fo.inputValue = this.searchContact;
        return fo;
    }

    public mousedown(event: Event) {
        event.stopPropagation();
    }
}
