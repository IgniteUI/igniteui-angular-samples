import {Component, OnInit} from "@angular/core";
import { DataType } from 'igniteui-angular';
import { AMINO_DATA } from "./data";

@Component({
    selector: "app-grid-nested-data-bind2",
    styleUrls: ["./grid-nested-data-bind2.scss"],
    templateUrl: "./grid-nested-data-bind2.html"
})
export class GridNestedDataBindAminoacidComponent implements OnInit {

    protected translateMap = new Map<string, string>([
        ['0', '₀'], ['1', '₁'], ['2', '₂'],
        ['3', '₃'], ['4', '₄'], ['5', '₅'],
        ['6', '₆'], ['7', '₇'], ['8', '₈'],
        ['9', '₉']
    ]);

    data: any[];

    nestedConfigColumns = [
        { field: 'name', header: 'Name'},
        { field: 'abbreviation.long', header: 'Abbr. (long)'},
        { field: 'abbreviation.short', header: 'Abbr. (short)'},
        { field: 'weight.molecular', header: 'Molecular Weight', type: DataType.Number },
        { field: 'formula.molecular', header: 'Molecular Formula', formatter: this.number2subscript },
        { field: 'formula.residue', header: 'Residue Formula', formatter: this.number2subscript },
        { field: 'weight.residue', header: 'Residue Weight (-H2O)', type: DataType.Number },
        { field: 'p.Ka', type: DataType.Number },
        { field: 'p.Kb', type: DataType.Number },
        { field: 'p.Kx', type: DataType.Number },
        { field: 'p.l', type: DataType.Number }
    ];

    number2subscript(value: string) {
        return value.split('').map(each => this.translateMap.get(each) || each).join('');
    }

    public ngOnInit() {
        this.data = [...AMINO_DATA];
    }
}
