export class Record {
    get IndustrySector() {
        return this.industrySector;
    }
    set IndustrySector(val) {
        this.industrySector = val;
    }
    get IndustryGroup() {
        return this.industryGroup;
    }
    set IndustryGroup(val) {
        this.industryGroup = val;
    }
    get SectorType() {
        return this.sectorType;
    }
    set SectorType(val) {
        this.sectorType = val;
    }
    get KRD() {
        return this.krd;
    }
    set KRD(val) {
        this.krd = val;
    }
    get MarketNotion() {
        return this.marketNotion;
    }
    set MarketNotion(val) {
        this.marketNotion = val;
    }
    get DATE() {
        return this.date;
    }
    set DATE(val) {
        this.date = val;
    }

    private industrySector: string;
    private industryGroup: string;
    private sectorType: string;
    private krd: number;
    private marketNotion: number;
    private date: Date;

    constructor() {
        this.industryGroup = "";
        this.industrySector = "";
        this.sectorType = "";
        this.krd = 0.0;
        this.marketNotion = 0.0;
        this.date = new Date();
    }
}
