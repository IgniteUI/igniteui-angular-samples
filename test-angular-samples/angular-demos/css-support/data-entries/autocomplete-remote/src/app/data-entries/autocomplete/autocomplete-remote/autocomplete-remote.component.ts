import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxAutocompleteDirective } from "igniteui-angular";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { RemoteService } from "../../../grid/services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "autocomplete-remote",
    styleUrls: ["./autocomplete-remote.component.css"],
    templateUrl: "./autocomplete-remote.component.html"
})
export class AutocompleteRemote implements OnInit {
    public data: any;
    public selectedItem: any;
    public loading = false;
    public noItems = false;
    public fakeModel = new Subject<string>();

    constructor(public remoteService: RemoteService) { }

    public ngOnInit() {
        // Do not trigger change event on every keystroke, but 250ms after the input has been interrupted.
        this.fakeModel.pipe(debounceTime(250), distinctUntilChanged()).subscribe(this.onChange);
    }

    public onChange = (value) => {
        this.selectedItem = value;
        this.loading = true;
        // setTimeout used only to extend data loading time.
        setTimeout(() => this.fetchData(value), 1500);
    }

    public onClear = () => {
        this.selectedItem = "";
        this.onChange("");
    }

    private fetchData = (input: string) => {
        // comment out the ' character because it causes errors if there are words that use it
        const inputTerm = input.includes("'") ? input.replace(/\'/g, "''") : input;
        this.data = this.remoteService.remoteData;
        this.remoteService.getData({ startIndex: 0, chunkSize: 20 }, inputTerm, (args) => {
            this.loading = false;
            this.noItems = args.value.length === 0;
        });
    }
}
