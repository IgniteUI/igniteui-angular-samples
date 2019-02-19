import { Injectable } from "@angular/core";

@Injectable()
export class SampleRadialData {

    public static create(): any[] {
        const data: any[] = [];
        data.push({ Spending: 20, Budget: 60, Department: "Admin" });
        data.push({ Spending: 80, Budget: 40, Department: "Sales" });
        data.push({ Spending: 30, Budget: 60, Department: "IT" });
        data.push({ Spending: 80, Budget: 40, Department: "Marketing" });
        data.push({ Spending: 40, Budget: 60, Department: "Research" });
        data.push({ Spending: 60, Budget: 20, Department: "Support" });
        return data;
    }
}
