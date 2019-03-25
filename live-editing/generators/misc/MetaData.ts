export class MetaData {
    public generationTimeStamp: number;
    constructor() {
        this.generationTimeStamp = new Date().getTime();
    }
}
