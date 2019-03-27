import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ButtonGroupAlignment } from "igniteui-angular";

interface IButton {
    ripple?: string;
    label?: string;
    togglable?: boolean;
    selected?: boolean;
    icon?: string;
}

class ToggleButton {
    private ripple: string;
    private label: string;
    private togglable: boolean;
    private selected: boolean;
    private icon: string;

    constructor(obj?: IButton) {
        this.ripple = obj.ripple || "gray";
        this.label = obj.label;
        this.selected = obj.selected || false;
        this.togglable = obj.togglable;
        this.icon = obj.icon;
    }
}

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-button-group-sample-1",
    styleUrls: ["./button-group-sample-1.component.scss"],
    templateUrl: "./button-group-sample-1.component.html"
})

export class ButtonGroupSample1Component implements OnInit {
    public alignment = ButtonGroupAlignment.vertical;
    public rippleColor = "grey";
    public borders: ToggleButton[];
    public fontOptions: ToggleButton[];

    public ngOnInit() {
        this.borders = [
            new ToggleButton({
                icon: "border_top",
                selected: true
            }),
            new ToggleButton({
                icon: "border_right",
                selected: false
            }),
            new ToggleButton({
                icon: "border_bottom",
                selected: false
            }),
            new ToggleButton({
                icon: "border_left",
                selected: false
            })
        ];

        this.fontOptions = [
            new ToggleButton({
                icon: "format_bold",
                selected: false
            }),
            new ToggleButton({
                icon: "format_italic",
                selected: true
            }),
            new ToggleButton({
                icon: "format_underlined",
                selected: false
            })
        ];
    }
}
