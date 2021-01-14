import { Character } from './characters';
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDialogComponent, IgxGridComponent, IGridCellEventArgs } from "igniteui-angular";
import { DATA, ALIGNMENTS, RACES, CLASSES } from "./data";

@Component({
    selector: "app-grid-editing-sample",
    styleUrls: ["./grid-editing-sample.component.scss"],
    templateUrl: "./grid-editing-sample.component.html"
})
export class GridSelectComponent implements OnInit {

    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    @ViewChild("dialogAdd", { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;
    public data;
    public alignments;
    public races;
    public classes;
    public character;

    public ngOnInit() {
        this.data = DATA.map((e) => {
            const indexAlignments = Math.floor(Math.random() * ALIGNMENTS.length);
            e.alignment = ALIGNMENTS[indexAlignments];
            const indexRaces = Math.floor(Math.random() * RACES.length);
            e.race = RACES[indexRaces];
            const indexClasses = Math.floor(Math.random() * CLASSES.length);
            e.class = CLASSES[indexClasses];
            return e;
        });
        this.character = new Character();
        this.alignments = ALIGNMENTS;
        this.races = RACES;
        this.classes = CLASSES;
    }

    public removeRow(rowIndex) {
       const row = this.grid1.getRowByIndex(rowIndex);
       row.delete();
    }

    public addRow() {
        this.grid1.addRow(this.character);
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.character = new Character();
    }
}
