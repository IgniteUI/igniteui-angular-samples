import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
  selector: "grid-toolbar-sample-2",
  styleUrls: ["./grid-toolbar-sample-1.component.scss"],
  templateUrl: "./grid-toolbar-sample-1.component.html"
})
export class GridToolbarSample2Component implements OnInit {

    @ViewChild("grid1") public grid: IgxGridComponent;
    public data: any[];
  
    ngOnInit() {
        this.data = athletesData;
    }

    public toolbarExportingHandler(args) {
        args.cancel = true; // cancel default exporting process
        let exporter;
        switch (args.type) {
            case "excel" :
                exporter = args.exporter as IgxExcelExporterService
                // configure and perform excel export operation here
                break;
            case "csv" :
                exporter = args.exporter as IgxCsvExporterService;
                // configure and perform csv export operation here
                break;
        }
    }
}
