import { Component, OnInit } from "@angular/core";

interface IButton {
  ripple?: string;
  label?: string;
  disabled?: boolean;
  togglable?: boolean;
  selected?: boolean;
  color?: string;
  bgcolor?: string;
  icon?: string;
}

class Button {
  private ripple: string;
  private label: string;
  private disabled: boolean;
  private togglable: boolean;
  private selected: boolean;
  private color: string;
  private bgcolor: string;
  private icon: string;

  constructor(obj?: IButton) {
      this.ripple = obj.ripple || "gray";
      this.label = obj.label;
      this.selected = obj.selected || false;
      this.togglable = obj.togglable;
      this.disabled = obj.disabled || false;
      this.color = obj.color;
      this.bgcolor = obj.bgcolor || "white";
      this.icon = obj.icon;
  }
}

@Component({
  selector: "app-button-group-sample-3",
  styleUrls: ["./button-group-sample-3.component.css"],
  templateUrl: "./button-group-sample-3.component.html"
})
export class ButtonGroupSample3Component implements OnInit {

  public multi = true;
  public alignOptions: Button[];

  constructor() { }

  public ngOnInit() {
    this.alignOptions = [
      new Button({
          icon: "format_align_left",
          selected: true,
          togglable: false
      }),
      new Button({
          icon: "format_align_center"
      }),
      new Button({
          icon: "format_align_right",
          selected: true
      }),
      new Button({
          disabled: true,
          icon: "format_align_justify"
      })
  ];
  }

}
