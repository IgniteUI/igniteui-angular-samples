import { Component } from "@angular/core";

@Component({
  selector: "app-nav-drawer-styled",
  styleUrls: ["./nav-drawer-styled.component.scss"],
  templateUrl: "./nav-drawer-styled.component.html"
})
export class NavDrawerStyledComponent {
    public componentLinks = [
        {
            link: "/avatar",
            name: "Avatar"
        },
        {
            link: "/badge",
            name: "Badge"
        },
        {
            link: "/button-group",
            name: "Button Group"
        }
    ];
}
