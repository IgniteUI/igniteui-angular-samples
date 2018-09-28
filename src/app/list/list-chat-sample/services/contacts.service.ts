import { Injectable } from "@angular/core";
export interface IContact {
    id: number;
    name: string;
    phone: string;
    photo: string;
}
@Injectable({
    providedIn: "root"
})

export class ContactsService {
    private _contacts: IContact[] = [
        {
            id: 1,
            name: "Terrance Orta",
            phone: "770-504-2217",
            photo: "https://randomuser.me/api/portraits/men/27.jpg"
        },
        {
            id: 2,
            name: "Richard Mahoney",
            phone: "423-676-2869",
            photo: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            id: 3,
            name: "Donna Price",
            phone: "859-496-2817",
            photo: "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            id: 4,
            name: "Lisa Landers",
            phone: "901-747-3428",
            photo: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
            id: 5,
            name: "Dorothy H. Spencer",
            phone: "573-394-9254",
            photo: "https://randomuser.me/api/portraits/women/67.jpg"
        }
    ];

    public getMockContacts(): IContact[] {
        return this._contacts;
    }

    public getContact(id: number): IContact {
        return this.getMockContacts().find((contact) => contact.id === id);
    }
}
