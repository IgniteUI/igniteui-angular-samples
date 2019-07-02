export enum MapRegion {
    Caribbean = "Caribbean",
    UnitedStates = "United States",
    UnitedKingdom = "United Kingdom",
    European = "European",
    SouthAfrica = "South Africa",
    Poland = "Poland",
    Australia = "Australia",
    Japan = "Japan",
    Uruguay = "Uruguay",
    Egypt = "Egypt",
    Hawaii = "Hawaii"
}

export class MapUtility {

    public static toPixel(num: number): string {
        const s = Math.abs(num).toFixed(0);
        return s + " px";
    }

    public static toLng(num: number): string {
        num = this.clamp(num, -180, 180);

        let s = Math.abs(num).toFixed(1);
        if (num < 100) {
            s = "  " + s;
        }

        if (num > 0) {
            return s + "°E";
        } else  {
            return s + "°W";
        }
    }

    public static toLat(num: number): string {
        num = this.clamp(num, -90, 90);

        let s = Math.abs(num).toFixed(1);
        if (num < 100) {
            s = "  " + s;
        }

        if (num > 0) {
            return s + "°N";
        } else  {
            return s + "°S";
        }
    }

    public static clamp(num: number, min: number, max: number): number {
        return Math.max(min, Math.min(max, num));
    }

    public static pad(num: number, places?: number): string {
        places = places || 20;
        let s = num.toFixed(1).toString();
        while (s.length < places) { s = " " + s; }
        return s;
    }

    public static getBingKey(): string {
        return "Aj2inbXEmvSbAbbVUKH1-DWlUeWIGjFTY3K2K8d1lqE5mEwI3_1oFX2U2tqONiHF";
    }

    public static getRegions(): any {
        // create regions only once
        if (this.regions === undefined) {
            this.createRegions();
        }
        return this.regions;
    }

    private static regions: any;

    private static addRegion(name: string, geoRect: any) {
        geoRect.name = name;
        geoRect.longitude = geoRect.left + (geoRect.width / 2);
        geoRect.latitude = geoRect.top + (geoRect.height / 2);

        this.regions[name] = geoRect;
    }

    private static createRegions() {
        this.regions = {};
        this.addRegion(MapRegion.Australia, { left: 81.5, top: -52.0, width: 98.0, height: 56.0 });
        this.addRegion(MapRegion.Caribbean, { left: -92.9, top: 5.4, width: 35.1, height: 25.8 });
        this.addRegion(MapRegion.Egypt, { left: 19.3, top: 19.9, width: 19.3, height: 13.4 });
        this.addRegion(MapRegion.European, { left: -36.0, top:31.0, width: 98.0, height: 38.0 });
        this.addRegion(MapRegion.Japan, { left: 122.7, top: 29.4, width: 27.5, height: 17.0 });
        this.addRegion(MapRegion.Hawaii, { left: -161.2, top: 18.5, width: 6.6, height: 4.8 });
        this.addRegion(MapRegion.Poland, { left: 13.0, top: 48.0, width: 11.0, height: 9.0 });
        this.addRegion(MapRegion.SouthAfrica, { left: 9.0, top: -37.1, width: 26.0, height: 17.8 });
        this.addRegion(MapRegion.UnitedStates, { left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
        this.addRegion(MapRegion.UnitedKingdom, { left: -15.0, top: 49.5, width: 22.5, height: 8.0 });
        this.addRegion(MapRegion.Uruguay, { left: -62.1, top: -35.7, width: 10.6, height: 7.0 });
    }

}
