import { Injectable } from "@angular/core";

// this data service generates OHLC prices with 1 day interval between specified range of dates
@Injectable()
export class GenerateOhlcPricesService {

    public daysInterval: number;
    public priceStart: number;
    public priceRange: number;
    public volumeRange: number;
    public volumeStart: number;

    constructor() {
        this.daysInterval = 1;
        this.priceStart = 300;
        this.priceRange = 5;
        this.volumeRange = 100;
        this.volumeStart = 10000;
    }

    public GetStockHistoryBetween(dateStart: Date, dateEnd: Date): any {
        let time = this.AddDays(dateStart, 0);
        let v = this.volumeStart;
        let o = this.priceStart;
        let h = o + (Math.random() * this.priceRange);
        let l = o - (Math.random() * this.priceRange);
        let c = l + (Math.random() * (h - l));

        const stock = [];

        while (time.getTime() < dateEnd.getTime()) {
            stock.push({ date: time, open: o, high: h, low: l, close: c, volume: v });

            o = c + ((Math.random() - 0.5) * this.priceRange);
            h = o + (Math.random() * this.priceRange);
            l = o - (Math.random() * this.priceRange);
            c = l + (Math.random() * (h - l));
            v = v + ((Math.random() - 0.5) * this.volumeRange);

            o = Math.round(o * 100) / 100;
            h = Math.round(h * 100) / 100;
            l = Math.round(l * 100) / 100;
            c = Math.round(c * 100) / 100;
            v = Math.round(v * 100) / 100;
            time = this.AddDays(time, this.daysInterval);
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            close: ["SeriesTitle/Stock Prices"]
        };

        return stock;
    }

    public AddDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public AddYears(date: Date, years: number): Date {
        return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
    }

    public GetStockHistoryFrom(dateEnd: Date, years: number): any {

        const dateStart = this.AddYears(dateEnd, -years);
        return this.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
