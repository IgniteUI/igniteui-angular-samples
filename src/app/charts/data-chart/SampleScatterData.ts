import { Injectable } from "@angular/core";

@Injectable()
export class SampleScatterData {

    public static create(): any[] {

        const data: any[] = [];
        const xMin = -180;
        const xMax = 180;
        const yMin = -90;
        const yMax = 90;
        const xCount = 11;
        const yCount = 11;

        const xStep = (xMax - xMin) / (xCount - 1);
        const yStep = (yMax - yMin) / (yCount - 1);
        let index = 0;
        for (let x = xMin; x <= xMax; x += xStep) {
            for (let y = yMin; y <= yMax; y += yStep) {
                const z = Math.cos(x) + Math.cos(y);
                data.push({ X: x, Y: y, Z: z, Index: index++ });
            }
        }
        return data;
    }

    public static createWaveData(): any[] {
        const data: any[] = [];
        let index = 0;
        for (let angle = 0; angle <= 360; angle += 10) {
            const radians = angle * Math.PI / 180;
            const sin = Math.sin(radians);
            const cos = Math.cos(radians);
            data.push({ Angle: angle, Radians: radians, SinValue: sin, CosValue: cos, Index: index++ });
        }
        return data;
    }
}
