import { Component, OnInit } from "@angular/core";

interface ICard {
    title?: string;
    subtitle?: string;
    content?: string;
    imageUrl?: string;
    avatarUrl?: string;
    buttons?: string[];
    icons?: string[];
}

class Card {
    public title: string;
    public subtitle: string;
    public content: string;
    public imageUrl: string;
    public avatarUrl: string;
    public buttons: string[];
    public icons: string[];

    constructor(obj?: ICard) {
        this.title = obj.title || "Card Title";
        this.subtitle = obj.subtitle || "Card Subtitle";
        this.content = obj.content ||
            "Some card content should be placed here. Description or other related information.";
        this.imageUrl = obj.imageUrl || "assets/images/card/media/placeholder.jpg";
        this.avatarUrl = obj.avatarUrl || "assets/images/card/avatars/rupert_stadler.jpg";
        this.buttons = obj.buttons || ["ACTION1", "ACTION2"];
        this.icons = obj.icons || ["favorite", "bookmark", "share"];
    }
}

@Component({
    selector: "app-card",
    styleUrls: ["./card.component.css"],
    templateUrl: "./card.component.html"
})
export class CardComponent implements OnInit {

    public cards: Card[];
    constructor() { }

    public ngOnInit() {
        this.cards = [
            new Card({
                content: `New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that’s among the world’s major commercial,
                  financial and cultural centers.`,
                icons: ["favorite", "bookmark", "share"],
                imageUrl: "assets/images/card/media/ny.jpg",
                subtitle: "City in New York",
                title: "New York City"
            }),
            new Card({
                icons: ["favorite", "bookmark", "share"],
                imageUrl: "assets/images/card/media/the_red_ice_forest.jpg"
            }),
            new Card({
                buttons: ["Share", "Explore"],
                imageUrl: "assets/images/card/media/yosemite.jpg",
                subtitle: "Yosemite National Park",
                title: "Incipient Dawn"
            }),
            new Card({
                content: `Nico Erik Rosberg is a German former Formula One racing driver
              and current Formula One World Champion who drove for Williams F1 and
              Mercedes AMG Petronas under the German flag.`,
                subtitle: "Racing Driver",
                title: "Nico Rosberg"
            }),
            new Card({
                avatarUrl: "assets/images/card/avatars/alicia_keys.jpg",
                buttons: ["share", "play album"],
                imageUrl: "assets/images/card/media/here_media.jpg",
                subtitle: "by Alicia Keys",
                title: "HERE"
            }),
            new Card({
                buttons: ["Comment", "Explore"],
                icons: ["favorite", "share"],
                imageUrl: "assets/images/card/media/monuments.jpg"
            }),
            new Card({
                avatarUrl: "assets/images/card/avatars/rupert_stadler.jpg",
                buttons: ["message", "follow"],
                icons: ["add", "star"],
                imageUrl: "assets/images/card/media/audi_tt.jpg",
                subtitle: "January 30, 2017",
                title: "Rupert Stadler"
            }),
            new Card({})
        ];
    }

}
