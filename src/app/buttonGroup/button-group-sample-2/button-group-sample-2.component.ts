import { Component, OnInit } from "@angular/core";
import { ButtonGroupAlignment } from "igniteui-angular/main";

interface IButton {
  ripple?: string;
  label?: string;
  disabled?: boolean;
  togglable?: boolean;
  selected?: boolean;
  color?: string;
  icon?: string;
}

class Button {
  private ripple: string;
  private label: string;
  private disabled: boolean;
  private togglable: boolean;
  private selected: boolean;
  private color: string;
  private icon: string;

  constructor(obj?: IButton) {
      this.ripple = obj.ripple || "gray";
      this.label = obj.label;
      this.selected = obj.selected || false;
      this.togglable = obj.togglable;
      this.disabled = obj.disabled || false;
      this.color = obj.color;
      this.icon = obj.icon;
  }
}

@Component({
  selector: "app-button-group-sample-2",
  styleUrls: ["./button-group-sample-2.component.css"],
  templateUrl: "./button-group-sample-2.component.html"
})
export class ButtonGroupSample2Component implements OnInit {

  public multi = true;
  public alignment = ButtonGroupAlignment.vertical;
  public cities: Button[];

  constructor() { }

  public ngOnInit() {
    this.cities = [
      new Button({
          label: "Sofia"
      }),
      new Button({
          label: "London"
      }),
      new Button({
          label: "New York",
          selected: true
      }),
      new Button({
          label: "Tokyo"
      })
  ];
  }

}
