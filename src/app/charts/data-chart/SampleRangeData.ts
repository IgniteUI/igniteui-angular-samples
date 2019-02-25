import { Injectable } from "@angular/core";

@Injectable()
export class SampleRangeData {

    public static create(): any[] {
        let temperature = 25;
        const data: any[] = [];
        for (let i = 1900; i < 2020; i++) {
            temperature += (Math.random() - 0.475) * 0.5;
            const high = this.round(temperature + (Math.random() * 2));
            const low  = this.round(temperature - (Math.random() * 2));
            data.push({High: high, Low: low, Year: i});
        }
        return data;
    }
    public static round(value: number) {
        return Math.round(value * 10) / 10;
    }
}
