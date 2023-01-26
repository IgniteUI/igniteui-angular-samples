import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { ColumnPinningPosition, IgxColumnComponent, IgxGridComponent, IPinningConfig } from '@infragistics/igniteui-angular';
import { employeesData } from '../../data/employeesData';
import { athletesData } from '../../data/athletesData';

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: 'app-grid-sample',
    styleUrls: ['grid-right-pinning.component.scss'],
    templateUrl: 'grid-right-pinning.component.html'
})

export class RightPinningSampleComponent implements OnInit{
    @ViewChild('grid1', { static: true })
    public grid1: IgxGridComponent;

    public data: any[];
    public employeesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    private _columnsPinned: boolean = true;

    public ngOnInit(): void {
        this.data = athletesData;
        this.employeesData = employeesData;
        let i = 0;
        this.data.forEach((x) => {
            x.FirstPlaces = Math.floor(Math.random() * Math.floor(3));
            x.SecondPlaces = Math.floor(Math.random() * Math.floor(4));
            x.ThirdPlaces = Math.floor(Math.random() * Math.floor(5));
            x.RegistrationDate = this.generateReadableDate(x.Registered);
            x.Birthday = this.generateReadableDate(this.employeesData[i].birthday);
            x.Sponsor = this.employeesData[i].company;
            x.Agent = this.employeesData[i].name;
            x.AgentContact = this.employeesData[i].email;
            x.AgentPhone = this.employeesData[i].work_phone;
            i++;
        });
    }

    public toggleColumn(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }

    private generateReadableDate(timestamp: string): Date {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(' ')[0]);
        }
        return dateObj;
    }

}
