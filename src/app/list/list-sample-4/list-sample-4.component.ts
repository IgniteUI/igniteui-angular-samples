import { Component, OnInit } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-js-blocks/main';
@Component({
  selector: 'app-contact-list2',
  templateUrl: './list-sample-4.component.html',
  styleUrls: ['./list-sample-4.component.css']
})
export class ListSample4Component implements OnInit {
  private searchContact: string;

  private contacts = [
    {
      name: 'Terrance Orta',
      phone: '770-504-2217',
      photo: 'https://randomuser.me/api/portraits/men/27.jpg',
      isFavorite: false
    },
    {
      name: 'Richard Mahoney',
      phone: '423-676-2869',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      isFavorite: true
    },
    {
      name: 'Donna Price',
      phone: '859-496-2817',
      photo: 'https://randomuser.me/api/portraits/women/50.jpg',
      isFavorite: false
    },
    {
      name: 'Lisa Landers',
      phone: '901-747-3428',
      photo: 'https://randomuser.me/api/portraits/women/3.jpg',
      isFavorite: false
    },
    {
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254',
      photo: 'https://randomuser.me/api/portraits/women/67.jpg',
      isFavorite: true
    }
  ];

  constructor() {}

  ngOnInit() {
    console.log();
  }

  toggleFavorite(index: number) {
    const contact = this.contacts[index];
    contact.isFavorite = !contact.isFavorite;
  }

  get filterContacts() {
    const fo = new IgxFilterOptions();
    fo.key = 'name';
    fo.inputValue = this.searchContact;
    return fo;
  }
}
