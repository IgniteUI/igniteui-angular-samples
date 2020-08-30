import { Component } from "@angular/core";
import { BaseInputGroupSampleComponent } from "../base-input.component";
import { InputGroupToken } from 'igniteui-angular';

@Component({
    selector: "app-input-group-sample-5",
    styleUrls: ["./input-group-sample-5.component.scss"],
    templateUrl: "./input-group-sample-5.component.html",
    providers: [{ provide: InputGroupToken, useValue: 'box' }]
})
export class InputGroupSample5Component extends BaseInputGroupSampleComponent { }
