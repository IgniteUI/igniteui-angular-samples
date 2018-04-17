/* tslint:disable:no-trailing-whitespace max-line-length */

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

// this data service generates OHLC prices with 1 day interval between specified range of dates
@Injectable()
export class GenerateOhlcPricesService {

    constructor() { }

    public GetStockHistoryBetween(dateStart: Date, dateEnd: Date): any {
         
        const daysInterval: number = 1;
        const priceStart: number = 300;
        const priceRange: number = 5;
        const volumeRange: number = 100;
        const volumeStart: number = 10000;
        let time = this.AddDays(dateStart, 0);
         
        let v = volumeStart;
        let o = priceStart;
        let h = o + (Math.random() * priceRange);
        let l = o - (Math.random() * priceRange);
        let c = l + (Math.random() * (h - l));

        const stock = [];

        while (time.getTime() < dateEnd.getTime()) {
            stock.push({ date: time, open: o, high: h, low: l, close: c, volume: v });
           
            o = c + ((Math.random() - 0.5) * priceRange);
            h = o + (Math.random() * priceRange);
            l = o - (Math.random() * priceRange);
            c = l + (Math.random() * (h - l));
            v = v + ((Math.random() - 0.5) * volumeRange);
            time = this.AddDays(time, daysInterval);
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            Open: ["SeriesTitle/Stock Prices"]
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
