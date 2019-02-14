export class StocksUtility {

    public static intervalDays: number = 1;
    public static intervalHours: number = 0;
    public static intervalMinutes: number = 0;

    public static priceStart: number = 200;
    public static priceRange: number = 1;
    public static volumeRange: number = 1000;
    public static volumeStart: number = 20000000;

    public static GetStocksFrom(dateEnd: Date, years: number): any {
        const dateStart = this.AddYears(dateEnd, -years);
        return this.GetStocksBetween(dateStart, dateEnd);
    }

    public static GetStocksItems(points: number): any {
        this.intervalDays = 0;
        this.intervalHours = 1;
        this.intervalMinutes = 0;

        const today = new Date();
        const year = today.getFullYear();
        const dateEnd = new Date(year, 11, 1);
        const dateStart = this.AddHours(dateEnd, -points);
        return this.GetStocksBetween(dateStart, dateEnd);
    }

    public static GetStocksBetween(dateStart: Date, dateEnd: Date): any {

        let interval = this.intervalDays * 24 * 60;
        interval += this.intervalHours * 60;
        interval += this.intervalMinutes;

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
            if (o < 0) {
                o = Math.abs(o) + 2;
            }
            h = o + (Math.random() * this.priceRange);
            l = o - (Math.random() * this.priceRange);
            c = l + (Math.random() * (h - l));
            v = v + ((Math.random() - 0.5) * this.volumeRange);
            if (v < 0) {
                v = Math.abs(v) + 10000;
            }

            o = Math.round(o * 100) / 100;
            h = Math.round(h * 100) / 100;
            l = Math.round(l * 100) / 100;
            c = Math.round(c * 100) / 100;
            v = Math.round(v * 100) / 100;

            time = this.AddMinutes(time, interval);
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            close: ["SeriesTitle/Stock Prices"]
        };
        return stock;
    }

    public static AddMinutes(date: Date, minutes: number): Date {
        return new Date(date.getTime() + minutes * 60 * 1000);
    }

    public static AddHours(date: Date, hours: number): Date {
        return new Date(date.getTime() + hours * 60 * 60 * 1000);
    }

    public static AddDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public static AddYears(date: Date, years: number): Date {
        return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
    }

    public static toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "M";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "K";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }

    public static GetYear(date: Date): number {
        return date.getFullYear();
    }

    public static GetQuarter(date: Date): number {
        const month = date.getMonth();
        return Math.round((month + 2) / 3);
    }

    public static GetLastItem(array: any[]): any {
        if (array.length === 0) {
            return null;
        }
        return array[array.length - 1];
    }

    public static GetNewItem(array: any[], interval?: number): any {
        const lastItem = this.GetLastItem(array);

        if (interval === undefined) {
            interval = this.intervalDays * 24 * 60;
            interval += this.intervalHours * 60;
            interval += this.intervalMinutes;
        }

        const time = this.AddMinutes(lastItem.date, interval);
        let v = lastItem.volume;
        let o = lastItem.open;
        let h = lastItem.high;
        let l = lastItem.low;
        let c = lastItem.close;

        o = c + ((Math.random() - 0.5) * this.priceRange);
        if (o < 0) {
            o = Math.abs(o) + 2;
        }
        h = o + (Math.random() * this.priceRange);
        l = o - (Math.random() * this.priceRange);
        c = l + (Math.random() * (h - l));
        v = v + ((Math.random() - 0.5) * this.volumeRange);
        if (v < 0) {
            v = Math.abs(v) + 10000;
        }

        const newValue = { date: time, open: o, high: h, low: l, close: c, volume: v };

        return newValue;
    }
}
