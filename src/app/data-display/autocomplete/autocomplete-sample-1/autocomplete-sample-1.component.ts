import { Component } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { RemoteService } from "../../../grid/services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "autocomplete-1",
    styleUrls: ["./autocomplete-sample-1.component.scss"],
    templateUrl: "./autocomplete-sample-1.component.html"
})
export class AutocompleteSample1Component {
    public data: any;
    public selectedItem: any;
    public itemFound: boolean;
    private cancelSub: Subscription;

    constructor(public remoteService: RemoteService) { }

    public onChange(): void {
        if (this.cancelSub) {
            this.cancelSub.unsubscribe();
        }
        this.cancelSub = timer(500).subscribe(() => {
            this.fetchData(this.selectedItem);
        });
    }

    private matchFound(term: string): boolean {
        if (!this.data) {
            return false;
        }
        if (term === "") {
            return true;
        }

        return this.data.value.filter((p) => {
            return p.ProductName.toLowerCase().includes(term.toLowerCase());
        }).length > 0;
    }

    private fetchData(input: string): void {
        // comment out the ' character because it causes errors if there are words that use it
        const inputTerm = input.includes("'") ? input.replace(/\'/g, "''") : input;
        this.data = this.remoteService.remoteData;
        this.remoteService.getData({ startIndex: 0, chunkSize: 5 }, inputTerm, () => {
            this.itemFound = this.matchFound(input);
        });
    }
}
