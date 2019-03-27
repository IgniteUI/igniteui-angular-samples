import { Injectable } from "@angular/core";

// this data service generates stock prices at 1-hour interval between specified range of dates
@Injectable()
export class GenerateHourlyPricesService {

    constructor() { }

    public GetStockHistoryFrom(dateEnd: Date, years: number): any {
        const dateStart = this.AddYears(dateEnd, -years);
        return this.GetStockHistoryBetween(dateStart, dateEnd);
    }

    public GetStockHistoryBetween(dateStart: Date, dateEnd: Date): any {
        const hoursInterval: number = 1;
        const priceStart: number = 300;
        const priceRange: number = 5;
        let time = this.AddHours(dateStart, 0);
        let price = priceStart;

        const stock = [];

        while (time.getTime() < dateEnd.getTime()) {
            stock.push({ date: time, close: price });

            price = price + ((Math.random() - 0.5) * priceRange);
            price = Math.round(price * 100) / 100;
            time = this.AddHours(time, hoursInterval);
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            close: ["SeriesTitle/Stock Prices"]
        };

        return stock;
    }

    public AddHours(date: Date, hours: number): Date {
        return new Date(date.getTime() + hours * 60 * 60 * 1000);
    }

    public AddYears(date: Date, years: number): Date {
        return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
    }
}
