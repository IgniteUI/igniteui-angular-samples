/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from "@angular/core";
import { IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavHeaderLabelDirective, IgxBottomNavContentComponent } from "igniteui-angular";


@Component({
    selector: "app-tabbar-style",
    styleUrls: ["./tabbar-style.component.scss"],
    templateUrl: "./tabbar-style.component.html",
    imports: [IgxBottomNavComponent, IgxBottomNavItemComponent, IgxBottomNavHeaderComponent, IgxIconComponent, IgxBottomNavHeaderIconDirective, IgxBottomNavHeaderLabelDirective, IgxBottomNavContentComponent]
})
export class TabbarStyleComponent {
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
