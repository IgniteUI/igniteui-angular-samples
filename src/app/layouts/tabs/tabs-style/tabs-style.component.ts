import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-tabs-style",
    styleUrls: ["./tabs-style.component.scss"],
    templateUrl: "./tabs-style.component.html"
})
export class TabsStyleComponent implements OnInit {

    public card = {
        avatarUrl: "assets/images/card/avatars/mellow_d.jpg",
        buttons: ["play album"],
        content: `Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia,
                  there live the blind texts.`,
        imageUrl: "assets/images/card/media/here_media.jpg",
        subtitle: "by Mellow D",
        title: "HERE"
    };

    constructor() { }

    public ngOnInit() { }
}
