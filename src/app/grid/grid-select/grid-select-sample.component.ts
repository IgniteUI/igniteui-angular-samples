import { Character } from './characters';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxSelectComponent, IgxFocusDirective, IgxSelectItemComponent } from 'igniteui-angular';
import { DATA, ALIGNMENTS, RACES, CLASSES } from './data';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-grid-select-sample',
    styleUrls: ['./grid-select-sample.component.scss'],
    templateUrl: './grid-select-sample.component.html',
    imports: [IgxGridComponent, IgxColumnComponent, IgxCellEditorTemplateDirective, IgxSelectComponent, FormsModule, IgxFocusDirective, IgxSelectItemComponent]
})
export class GridSelectComponent implements OnInit {

    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public alignments;
    public races;
    public classes;
    public character;

    public generateRandomData(data) {
        return data.map((e) => {
            const indexAlignments = Math.floor(Math.random() * ALIGNMENTS.length);
            e.alignment = ALIGNMENTS[indexAlignments];
            const indexRaces = Math.floor(Math.random() * RACES.length);
            e.race = RACES[indexRaces];
            const indexClasses = Math.floor(Math.random() * CLASSES.length);
            e.class = CLASSES[indexClasses];
            return e;
        });
    }

    public ngOnInit() {
        this.data = this.generateRandomData(DATA);
        this.character = new Character();
        this.alignments = ALIGNMENTS;
        this.races = RACES;
        this.classes = CLASSES;
    }
}
