import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxFilterOptions, IgxFilterPipe, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxListActionDirective, IgxListComponent, IgxListItemComponent, IgxListLineSubTitleDirective, IgxListLineTitleDirective, IgxListThumbnailDirective } from 'igniteui-angular/list';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact-list2',
    styleUrls: ['./list-sample-4.component.scss'],
    templateUrl: './list-sample-4.component.html',
    imports: [IgxButtonGroupComponent, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, FormsModule, IgxInputDirective, IgxSuffixDirective, IgxListComponent, IgxListItemComponent, IgxRippleDirective, IgxAvatarComponent, IgxListThumbnailDirective, IgxListLineTitleDirective, IgxListLineSubTitleDirective, IgxListActionDirective, IgxFilterPipe]
})
export class ListSample4Component implements OnInit {
    public searchContact: string;

    public contacts = [
        {
            isFavorite: false,
            name: 'Terrance Orta',
            phone: '770-504-2217',
            photo: 'assets/images/men/27.jpg'
        },
        {
            isFavorite: true,
            name: 'Richard Mahoney',
            phone: '423-676-2869',
            photo: 'assets/images/men/1.jpg'
        },
        {
            isFavorite: false,
            name: 'Donna Price',
            phone: '859-496-2817',
            photo: 'assets/images/women/50.jpg'
        },
        {
            isFavorite: false,
            name: 'Lisa Landers',
            phone: '901-747-3428',
            photo: 'assets/images/women/3.jpg'
        },
        {
            isFavorite: true,
            name: 'Dorothy H. Spencer',
            phone: '573-394-9254',
            photo: 'assets/images/women/67.jpg'
        }
    ];

    public size = 'large';
    public sizes;

    constructor() { }

    public ngOnInit() {
        this.sizes = [
            { label: 'large', selected: this.size === 'large', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'small', selected: this.size === 'small', togglable: true }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event) {
        this.size = this.sizes[event.index].label;
    }

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
