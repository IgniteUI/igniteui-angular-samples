export class SharedData {

    public static getSharedData() {
        const data: any[] = [
            { Label: 4, Value: 4 },
            { Label: 5, Value: 5 },
            { Label: 2, Value: 2 },
            { Label: 7, Value: 7 },
            { Label: -1, Value: -1 },
            { Label: 3, Value: 3 },
            { Label: -2, Value: -2 },
            { Label: 5, Value: 5 },
            { Label: 2, Value: 2 },
            { Label: 6, Value: 6 }
        ];
        return data;
    }

    public static getPaddedDataForMarkers() {
        const data: any[] = [
            { Label: null, Value: null },
            { Label: 4, Value: 4 },
            { Label: 5, Value: 5 },
            { Label: 2, Value: 2 },
            { Label: 7, Value: 7 },
            { Label: -1, Value: -1 },
            { Label: 3, Value: 3 },
            { Label: -2, Value: -2 },
            { Label: 5, Value: 5 },
            { Label: 2, Value: 2 },
            { Label: 6, Value: 6 },
            { Label: null, Value: null }
        ];
        return data;
    }

    public static getSharedDataWithNullValues() {
        const data: any[] = [
            { Label: 4, Value: 4 },
            { Label: 5, Value: 5 },
            { Label: 2, Value: null },
            { Label: 7, Value: 7 },
            { Label: -1, Value: -1 },
            { Label: 3, Value: 3 },
            { Label: -2, Value: -2 },
            { Label: 5, Value: null },
            { Label: 2, Value: 2 },
            { Label: 6, Value: 6 }
        ];
        return data;
    }
}
