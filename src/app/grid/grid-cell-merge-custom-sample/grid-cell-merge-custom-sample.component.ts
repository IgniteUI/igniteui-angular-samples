import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { GridCellMergeMode, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { DefaultMergeStrategy } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-grid-cell-merge-custom-sample',
    styleUrls: ['./grid-cell-merge-custom-sample.component.scss'],
    templateUrl: './grid-cell-merge-custom-sample.component.html',
    imports: [
        IgxGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent
    ]
})
export class GridCellMergeCustomSampleComponent {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public data;
    public cellMergeMode: GridCellMergeMode = 'always';
    public perProjectMergeStrategy = new PerProjectMergeStrategy();
    constructor() {
        this.data = [
            { ActionID: "1", ProjectName: "IOT Switch Project", ActionName: "Data Import", Type: "Request", Priority: "Low", Status: "New", Created: new Date("2017-03-25"), LastEdit: new Date("2017-05-08") },
            { ActionID: "2", ProjectName: "IOT Switch Project", ActionName: "Reports", Type: "Request", Priority: "Low", Status: "New", Created: new Date("2017-03-14"), LastEdit: new Date("2017-03-15") },
            { ActionID: "4", ProjectName: "IOT Switch Project", ActionName: "Multiple Settings", Type: "Request", Priority: "Low", Status: "Rejected", Created: new Date("2017-04-05"), LastEdit: new Date("2017-04-30") },
            { ActionID: "3", ProjectName: "IOT Switch Project", ActionName: "Data Archiving", Type: "Request", Priority: "Medium", Status: "New", Created: new Date("2017-08-21"), LastEdit: new Date("2017-09-08") },
            { ActionID: "5", ProjectName: "IOT Switch Project", ActionName: "Main Menu: Return Button", Type: "Bug", Priority: "Medium", Status: "Fixed", Created: new Date("2017-06-17"), LastEdit: new Date("2017-07-03") },
            { ActionID: "6", ProjectName: "IOT Switch Project", ActionName: "Auto Turn Off", Type: "Bug", Priority: "Medium", Status: "New", Created: new Date("2017-04-12"), LastEdit: new Date("2017-05-27") },
            { ActionID: "7", ProjectName: "VR Device", ActionName: "Higher DRI", Type: "Request", Priority: "Medium", Status: "New", Created: new Date("2016-08-11"), LastEdit: new Date("2016-08-11") },
            { ActionID: "8", ProjectName: "VR Device", ActionName: "Accessible Power Button", Type: "Request", Priority: "Medium", Status: "New", Created: new Date("2016-07-13"), LastEdit: new Date("2016-07-14") },
            { ActionID: "9", ProjectName: "VR Device", ActionName: "Additional options", Type: "Request", Priority: "High", Status: "Rejected", Created: new Date("2016-09-02"), LastEdit: new Date("2016-09-08") },
            { ActionID: "10", ProjectName: "VR Device", ActionName: "Data Log", Type: "Request", Priority: "High", Status: "New", Created: new Date("2017-03-25"), LastEdit: new Date("2017-05-08") },
            { ActionID: "12", ProjectName: "VR Device", ActionName: "Motion Blur", Type: "Bug", Priority: "High", Status: "New", Created: new Date("2017-03-25"), LastEdit: new Date("2017-05-08") },
            { ActionID: "11", ProjectName: "VR Device", ActionName: "Left Sensors Delay", Type: "Bug", Priority: "High", Status: "Fixed", Created: new Date("2017-03-25"), LastEdit: new Date("2017-05-08") }
        ];
    }
}

export class PerProjectMergeStrategy extends DefaultMergeStrategy {
    /* Merge only cells within their respective projects */
    public override comparer(prevRecord: any, record: any, field: string): boolean {
        const a = prevRecord[field];
        const b = record[field];
        const projA = prevRecord['ProjectName'];
        const projB = record['ProjectName'];
        return a === b && projA === projB;
    }
}
