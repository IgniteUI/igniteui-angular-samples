import { Component } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';

@Component({
  selector: 'app-list-item-selection',
  templateUrl: './list-item-selection.component.html',
  styleUrls: ['./list-item-selection.component.scss']
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

    public selectItem(item) {
      if (!item.selected) {
        this.contacts.forEach(c => c.selected = false);
        item.selected = true;
      }
    }

    get filterContacts() {
      const fo = new IgxFilterOptions();
      fo.key = 'name';
      fo.inputValue = this.searchContact;
      return fo;
    }
}
