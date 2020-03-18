import { Component } from "@angular/core";

@Component({
  selector: "app-nav-drawer-styled",
  styleUrls: ["./nav-drawer-styled.component.scss"],
  templateUrl: "./nav-drawer-styled.component.html"
})
export class NavDrawerStyledComponent {
    public componentLinks = [
        {
            link: "/menus/navigation-drawer-styled/avatar",
            name: "Avatar"
        },
        {
            link: "/menus/navigation-drawer-styled/badge",
            name: "Badge"
        },
        {
            link: "/menus/navigation-drawer-styled/button-group",
            name: "Button Group"
        }
    ];
}
