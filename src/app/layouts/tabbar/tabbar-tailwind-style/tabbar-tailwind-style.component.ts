/* eslint-disable @typescript-eslint/quotes */
import { Component } from "@angular/core";
import { IgxBottomNavComponent, IgxBottomNavContentComponent, IgxBottomNavHeaderComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavHeaderLabelDirective, IgxBottomNavItemComponent } from 'igniteui-angular/bottom-nav';
import { IgxIconComponent } from 'igniteui-angular/icon';


@Component({
    selector: "app-tabbar-tailwind-style",
    styleUrls: ["./tabbar-tailwind-style.component.scss"],
    templateUrl: "./tabbar-tailwind-style.component.html",
    imports: [IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavHeaderLabelDirective, IgxBottomNavContentComponent]
})
export class TabbarTailwindStyleComponent {
    public songsList = [
        { title: "Havana", artist: "Camila Cabello" },
        { title: "Meant To Be", artist: "Bebe Rexha & Florida Georgia Line" },
        { title: "New Rules", artist: "Dua Lipa" },
        { title: "Wolves", artist: "Selena Gomez & Marshmello" }
        ];

    public moviesList = [
    { title: "Logan", genre: "Action, Drama, Sci-Fi" },
    { title: "Wonder Woman", genre: "Action, Adventure, Fantasy" },
    { title: "Guardians of the Galaxy Vol. 2", genre: "Action, Adventure, Sci-Fi" },
    { title: "Star Wars: The Last Jedi", genre: "Action, Adventure, Fantasy" }
    ];

    public booksList = [
    { title: "Wonder", author: "R. J. Palacio" },
    { title: "Milk and Honey", author: "Rupi Kaur" },
    { title: "Giraffes Can't Dance", author: "Jeff Kinne" },
    { title: "The Getaway", author: "Selena Gomez & Marshmello" }
    ];

    constructor() { }
}
