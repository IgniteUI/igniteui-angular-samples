import { Component, ViewChild } from "@angular/core";
import { TicksOrientation, IgxSliderComponent } from "igniteui-angular";

@Component({
    selector: "app-slider-bottom-ticks",
    styleUrls: ["./slider-secondary-ticks-mirror.component.scss"],
    templateUrl: "./slider-secondary-ticks-mirror.component.html"
})
export class SliderSecondaryTicksMirrorComponent {
    @ViewChild(IgxSliderComponent, { static: true })
    public slider: IgxSliderComponent;

    public ticksOrientation = TicksOrientation.mirror;

    public decrease() {
        debugger;
        this.slider.value = (this.slider.value as number) - this.slider.step;
        this.slider.getEditElement().focus();
    }

    public increase() {
        this.slider.value = (this.slider.value as number) + this.slider.step;
        this.slider.getEditElement().focus();
    }
}
