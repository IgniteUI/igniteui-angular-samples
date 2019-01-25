import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxCircularProgressBarComponent, IgxDropDownComponent } from 'igniteui-angular';
import { RemoteService } from "../../../grid/services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "autocomplete-1",
    styleUrls: ["./autocomplete-sample-1.component.scss"],
    templateUrl: "./autocomplete-sample-1.component.html"
})
export class AutocompleteSample1Component implements OnInit {
    public data: any;
    public selectedItem: any;

    @ViewChild("progressBar", { read: IgxCircularProgressBarComponent })
    public progressBar: IgxCircularProgressBarComponent;

    @ViewChild("itemsPanel", { read: IgxDropDownComponent })
    public dropdownMenu: IgxDropDownComponent;

    constructor(public remoteService: RemoteService) { }

    public ngOnInit(): void {
    }

    public onChange(value: any): void {
        setTimeout(() => {
            this.data = this.remoteService.remoteData;
            this.remoteService.getData({ startIndex: 0, chunkSize: 5 }, value);
        }, 2000);
    }
}
