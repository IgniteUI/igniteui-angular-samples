import { Component } from "@angular/core";
import { Card } from "./card.blueprint";

@Component({
    selector: "app-card",
    styleUrls: ["./card.component.scss"],
    templateUrl: "./card.component.html"
})
export class CardComponent {
    public card = new Card({
        buttons: ["read more"],
        content: `New York City comprises 5 boroughs sitting where the
                  Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                  a densely populated borough that’s among the world’s major commercial,
                  financial and cultural centers.`,
        icons: ["favorite", "share"],
        imageUrl: "assets/images/card/media/ny.jpg",
        subtitle: "City in New York",
        title: "New York City"
    });

    public ngOnInit() {
        // this.cards = [
        //     new Card({
        //         buttons: ["read more"],
        //         content: `New York City comprises 5 boroughs sitting where the
        //           Hudson River meets the Atlantic Ocean. At its core is Manhattan,
        //           a densely populated borough that’s among the world’s major commercial,
        //           financial and cultural centers.`,
        //         icons: ["favorite", "share"],
        //         imageUrl: "assets/images/card/media/ny.jpg",
        //         subtitle: "City in New York",
        //         title: "New York City"
        //     }),
        //     new Card({
        //         icons: ["skip_previous", "play_arrow", "skip_next"],
        //         imageUrl: "assets/images/card/media/ROZES-Under-the-Grave.jpg",
        //         subtitle: "Under the Grave (2016)",
        //         title: "Rozes"
        //     }),
        //     new Card({
        //         icons: ["favorite", "bookmark", "share"],
        //         imageUrl: "assets/images/card/media/the_red_ice_forest.jpg"
        //     }),
        //     new Card({
        //         buttons: ["Share", "Explore"],
        //         imageUrl: "assets/images/card/media/yosemite.jpg",
        //         subtitle: "Yosemite National Park",
        //         title: "Incipient Dawn"
        //     }),
        //     new Card({
        //         content: `Nico Erik Rosberg is a German former Formula One racing driver
        //       and current Formula One World Champion who drove for Williams F1 and
        //       Mercedes AMG Petronas under the German flag.`,
        //         subtitle: "Racing Driver",
        //         title: "Nico Rosberg"
        //     }),
        //     new Card({
        //         avatarUrl: "assets/images/card/avatars/mellow_d.jpg",
        //         buttons: ["share", "play album"],
        //         imageUrl: "assets/images/card/media/here_media.jpg",
        //         subtitle: "by Melow D",
        //         title: "HERE"
        //     }),
        //     new Card({
        //         buttons: ["Comment", "Explore"],
        //         icons: ["favorite", "share"],
        //         imageUrl: "assets/images/card/media/monuments.jpg"
        //     }),
        //     new Card({
        //         avatarUrl: "assets/images/card/avatars/brad_stanley.jpg",
        //         buttons: ["message", "follow"],
        //         icons: ["add", "star"],
        //         imageUrl: "assets/images/card/media/audi.jpg",
        //         subtitle: "January 30, 2017",
        //         title: "Brad Stanley"
        //     })
        // ];
    }
}
