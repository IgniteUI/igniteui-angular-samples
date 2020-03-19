import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-drawer-styled",
  styleUrls: ["./nav-drawer-styled.component.scss"],
  templateUrl: "./nav-drawer-styled.component.html"
})
export class NavDrawerStyledComponent {
    public componentLinks = [
        {
            link: this.router.url + "/avatar",
            name: "Avatar"
        },
        {
            link: this.router.url + "/badge",
            name: "Badge"
        },
        {
            link: this.router.url + "/button-group",
            name: "Button Group"
        }
    ];

    constructor(private router: Router) { }
}
