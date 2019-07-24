export class Products {

    public static names: string[] = [
        "Intel CPU", "AMD CPU",
        "Nvidia GPU", "Gigabyte GPU", "Asus GPU", "AMD GPU", "MSI GPU",
        "Corsair Memory", "Patriot Memory", "Skill Memory",
        "Samsung HDD", "WD HDD", "Seagate HDD", "Intel HDD", "Asus HDD",
        "Samsung SSD", "WD SSD", "Seagate SSD", "Intel SSD", "Asus SSD",
        "Samsung Monitor", "Asus Monitor", "LG Monitor", "HP Monitor"
    ];

    public static countries: string[] = ["USA", "UK", "France", "Canada", "Poland",
            "Denmark", "Croatia", "Australia", "Seychelles",
            "Sweden", "Germany", "Japan", "Ireland",
            "Barbados", "Jamaica", "Cuba", "Spain"
    ];

    public static status: string[] = [
    "Packing", "Shipped", "Delivered"
    ];

    public static getData(count?: number): any[] {
        if (count === undefined) {
            count = 20;
        }
        const items: any[] = [];
        for (let i = 0; i < count; i++) {
            const id = this.pad(count - i, count.toString().length);
            const price = this.getRandomNumber(10000, 90000) / 100;
            const orderCount = this.getRandomNumber(4, 30);
            const orderValue = Math.round(price * orderCount);
            const orderShipped = this.getRandomNumber(30, 100);
            const margin = this.getRandomNumber(5, 10);
            const profit = Math.round(orderValue * (margin / 100));
            const country = this.getRandomItem(this.countries);

            // sales per month for sparkline chart
            const sales: any[] = [];
            for (let m = 0; m < 12; m++) {
                const sale = this.getRandomNumber(20, 90);
                sales.push({Value: sale, Month: m});
            }
            items.push({
                CountryFlag: this.getCountryFlag(country),
                CountryName: country,
                Margin: margin,
                // data source for embedded sparklines
                OrderCount: orderCount,
                OrderHistory: this.getOrderHistory(26),
                OrderShipped: orderShipped,
                OrderValue: orderValue,
                OrderDate: this.getRandomDate(),
                ID: id,
                Product: this.getRandomItem(this.names),
                Price: price,
                Profit: profit,
                ReturnRate: this.getReturnRate(52),
                Status: this.getRandomItem(this.status)
            });
        }
        console.log("Products items=" + items.length);
        return items;
    }

    public static getOrderHistory(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const sales: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(0, 100);
            sales.push({Sold: value, Week: w});
        }
        return sales;
    }

    public static getReturnRate(weekCount?: number): any[] {
        if (weekCount === undefined) {
            weekCount = 52;
        }
        const rates: any[] = [];
        for (let w = 0; w < weekCount; w++) {
            const value = this.getRandomNumber(-100, 100);
            rates.push({Balance: value, Week: w});
        }
        return rates;
    }

    public static getCountryFlag(country: string): string {
        const flag = "https://github.com/HUSSAR-mtrela/geo-data/raw/master/flags/" + country + ".png";
        // console.log("getCountryFlag " + flag)
        return flag;
    }

    public static getRandomDate(): Date {
        const today: Date = new Date();
        const year: number = today.getFullYear();
        const month: number = this.getRandomNumber(0, 8);
        const day: number = this.getRandomNumber(10, 27);
        return new Date(year, month, day);
    }

    public static getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }

    public static getRandomItem(array: any[]): any {
        const index = Math.round(this.getRandomNumber(0, array.length - 1));
        return array[index];
    }

    public static pad(num: number, size: number, char?: string): string {
        if (char === undefined) {
            char = "0";
        }
        let s = num + "";
        while (s.length < size) {
            s = char + s;
        }
        return s;
    }
}
