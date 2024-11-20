import { Component, ViewChild } from '@angular/core';
import { IgxButtonGroupComponent, IgxCalendarComponent, IgxButtonDirective }
from 'igniteui-angular';
import { NgFor } from '@angular/common';

const orientations = ["horizontal", "vertical"] as const;
type Orientation = (typeof orientations)[number];

@Component({
    selector: 'app-calendar',
    styleUrls: ['./calendar-sample-9.component.scss'],
    templateUrl: './calendar-sample-9.component.html',
    imports: [IgxCalendarComponent, IgxButtonGroupComponent, NgFor, IgxButtonDirective]
})

export class CalendarSample9Component {
    @ViewChild(IgxButtonGroupComponent, { static: true }) public buttonGroup: IgxButtonGroupComponent;
    protected orientations = Array.from(orientations, (o) => o);
    protected headerOrientation: Orientation = "horizontal";
    protected orientation: Orientation = "horizontal";

    protected setHeaderOrientation(orientation: Orientation) {
        this.headerOrientation = orientation;
    }

    protected setOrientation(orientation: Orientation) {
        this.orientation = orientation;
    }
}
