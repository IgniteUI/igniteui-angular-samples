import { Injectable } from "@angular/core";

@Injectable()
export class SharedData {

    public static getEnergyProduction() {
        const data: any[] = [
            {
                Coal: 400000000,
                Country: "Canada",
                Gas: 175000000,
                Hydro: 350000000,
                Nuclear: 225000000,
                Oil: 100000000
            },
            {
                Coal: 925000000,
                Country: "China",
                Gas: 350000000,
                Hydro: 625000000,
                Nuclear: 400000000,
                Oil: 200000000
            },
            {
                Coal: 550000000,
                Country: "Russia",
                Gas: 250000000,
                Hydro: 425000000,
                Nuclear: 475000000,
                Oil: 200000000
            },
            {
                Coal: 450000000,
                Country: "Australia",
                Gas: 150000000,
                Hydro: 350000000,
                Nuclear: 175000000,
                Oil: 100000000
            },
            {
                Coal: 800000000,
                Country: "United States",
                Gas: 475000000,
                Hydro: 750000000,
                Nuclear: 575000000,
                Oil: 250000000
            },
            {
                Coal: 375000000,
                Country: "France",
                Gas: 350000000,
                Hydro: 325000000,
                Nuclear: 275000000,
                Oil: 150000000
            }
        ];
        return data;
    }

    public static getItems(startValue: number, maxPoints: number, useShortLabels?: boolean): any[] {

        const data: any[] = [];
        let value = startValue;
        for (let i = 0; i <= maxPoints; i++) {
            value += Math.random() * 4.0 - 2.0;
            const v = Math.round(value);
            let l = i.toString();
            if (useShortLabels) {
                l = this.toShortString(i);
            }
            data.push({ Label: l, Value: v });
        }
        return data;
    }

    public static getTemperatures(startValue: number, startYear: number, endYear: number): any[] {
        const data: any[] = [];
        let value = startValue;
        for (let i = startYear; i <= endYear; i++) {
            value += (Math.random() - 0.5) * 0.5;
            const high = value + (Math.random() * 2);
            const low = value - (Math.random() * 2);
            const v = Math.abs(Math.round(value * 10) / 10);
            const h = Math.abs(Math.round(high * 10) / 10);
            const l = Math.abs(Math.round(low * 10) / 10);
            data.push({ Label: i.toString(), Value: v, High: h, Low: l });
        }
        return data;
    }

    public static getLastItem(array: any[]): any {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }

    public static getNewItem(array: any[], index: number): any {
        const lastItem = this.getLastItem(array);
        const newValue = lastItem.Value + Math.random() * 4.0 - 2.0;
        return { Label: index.toString(), Value: newValue };
    }

    public static toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "k";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }

    public static addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }
}
