import { Component, HostBinding, OnInit } from '@angular/core';
import { IgxSummaryOperand, IgxSummaryResult } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

class PTOSummary {

    public operate(data?: any[], allData = [], fieldName = ''): IgxSummaryResult[] {
        const result = [];
        result.push({
            key: 'totalOnPTO', label: 'Employees On PTO',
            summaryResult: IgxSummaryOperand.count(allData.filter((rec) => rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'devs', label: 'Developers',
            summaryResult: IgxSummaryOperand.count(
                allData.filter((rec) => rec[fieldName].includes('Developer') && rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'tl', label: 'Team Leads',
            summaryResult: IgxSummaryOperand.count(
                allData.filter((rec) => rec[fieldName].includes('Team Lead') && rec['OnPTO']).map(r => r[fieldName]))
        });
        result.push({
            key: 'managers', label: 'Managers/Directors',
            summaryResult: IgxSummaryOperand.count(
                allData.filter((rec) =>
                    (rec[fieldName].includes('Manager') || rec[fieldName].includes('Director')) && rec['OnPTO'])
                    .map(r => r[fieldName]))
        });
        result.push({
            key: 'ceo', label: 'CEO/President',
            summaryResult: IgxSummaryOperand.count(
                allData.filter((rec) =>
                    (rec[fieldName].includes('CEO') || rec[fieldName].includes('President')) && rec['OnPTO'])
                    .map(r => r[fieldName]))
        });
        return result;
    }
}

@Component({
    selector: 'app-treegrid-summary-template',
    styleUrls: ['./treegrid-summary-template.component.scss'],
    templateUrl: './treegrid-summary-template.component.html',
    standalone: false
})
export class TreeGridSummaryTemplateComponent implements OnInit {
    public data;
    public d;
    public ptoSummary = PTOSummary;
    public summaryHeight = 150;
    public size = 'medium';
    public sizes;
    public hasSummary = true;

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
        this.data.forEach(rec => rec.Title = rec.Title.includes('Localiza') ? 'Software Developer' : rec.Title);
        this.sizes = [
            { label: 'small', selected: this.size === 'small', togglable: true },
            { label: 'medium', selected: this.size === 'medium', togglable: true },
            { label: 'large', selected: this.size === 'large', togglable: true }
        ];
    }

    @HostBinding('style.--ig-size')
    protected get sizeStyle() {
        return `var(--ig-size-${this.size})`;
    }

    public selectSize(event): void {
        this.size = this.sizes[event.index].label;
    }
}
