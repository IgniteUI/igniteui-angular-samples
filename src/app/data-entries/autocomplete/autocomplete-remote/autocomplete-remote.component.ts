import { Component } from "@angular/core";
import { RemoteService } from "../../../grid/services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "autocomplete-remote",
    styleUrls: ["./autocomplete-remote.component.scss"],
    templateUrl: "./autocomplete-remote.component.html"
})
export class AutocompleteRemote {
    public data: any;
    public selectedItem: any;
    public loading = false;
    public noItems = true;

    constructor(public remoteService: RemoteService) { }

    public onChange(): void {
        this.loading = true;
        setTimeout(() => { // setTimeout here only for the sample purpose - to extend data loading time.
            this.fetchData(this.selectedItem);
        }, 1500);
    }

    private fetchData(input: string): void {
        // comment out the ' character because it causes errors if there are words that use it
        const inputTerm = input.includes("'") ? input.replace(/\'/g, "''") : input;
        this.data = this.remoteService.remoteData;
        this.remoteService.getData({ startIndex: 0, chunkSize: 20 }, inputTerm, (args) => {
            this.loading = false;
            this.noItems = args.value.length === 0;
        });
    }
}
