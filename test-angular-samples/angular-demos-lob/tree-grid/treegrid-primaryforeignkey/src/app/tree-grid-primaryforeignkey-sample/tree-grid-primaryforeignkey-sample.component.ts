import { Component, OnInit } from "@angular/core";
import { Data } from "./data";

@Component({
    selector: "app-tree-grid-primaryforeignkey-sample",
    styleUrls: ["./tree-grid-primaryforeignkey-sample.component.scss"],
    templateUrl: "./tree-grid-primaryforeignkey-sample.component.html"
})
export class TreeGridPrimaryforeignkeySampleComponent implements OnInit {
    public data: any[];
    public selectionMode = "multiple";
    constructor() { }

    public ngOnInit() {
        const employees = Data.employeePrimaryForeignKeyTreeData();
        for (const employee of employees) {
            this.getPerformance(employee);
        }
        this.data = employees;
    }

    public getPerformance(employee: any): any {
        employee["Performance"] = this.getPerformanceData(12);
        const hasEmployees = employee.Employees === undefined;
        if (hasEmployees) {
            return employee;
        } else {
            for (const employer of employee.Employees) {
                this.getPerformance(employer);
            }
        }
    }

    public getPerformanceData(weeks?: number): any[] {
        if (weeks === undefined) {
            weeks = 20;
        }
        const performance: any[] = [];
        for (let w = 0; w < weeks; w++) {
            const value = this.getRandomNumber(0, 100);
            performance.push({Points: value, Week: w});
        }
        return performance;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}
