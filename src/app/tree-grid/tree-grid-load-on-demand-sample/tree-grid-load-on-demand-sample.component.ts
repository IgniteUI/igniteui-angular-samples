import { Component, OnInit } from "@angular/core";
import { TreeGridLoadOnDemandService } from "./remoteService";

@Component({
    selector: "app-tree-grid-load-on-demand-sample",
    styleUrls: ["./tree-grid-load-on-demand-sample.component.scss"],
    templateUrl: "./tree-grid-load-on-demand-sample.component.html"
})
export class TreeGridLoadOnDemandSampleComponent implements OnInit {
    public data = [];
    private dataService = new TreeGridLoadOnDemandService();

    constructor() { }

    public ngOnInit() {
        this.dataService.getData(-1, (children) => {
            this.data = children;
        });
    }

    public loadChildren = (parentID: any, done: (children: any[]) => void) => {
        this.dataService.getData(parentID, (children) => done(children));
    }
}
