import { Component } from "@angular/core";
import { Card } from "../../../layouts/card/card.blueprint";

@Component({
    selector: "animations-sample-2",
    styleUrls: ["./animations-sample-2.component.scss"],
    templateUrl: "./animations-sample-2.component.html"
})
export class AnimationsSample2Component {
    public card = new Card({
        content: `As I have always said: I write what’s real and what’s true,
        even if it means throwing myself under the bus.`,
        icons: ["skip_previous", "play_arrow", "skip_next"],
        imageUrl: "assets/images/card/media/ROZES-Under-the-Grave.jpg",
        subtitle: "Under the Grave (2016)",
        title: "Rozes"
    });

    public horizontal = true;
}
