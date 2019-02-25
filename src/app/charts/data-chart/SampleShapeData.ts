import { Injectable } from "@angular/core";

@Injectable()
export class SampleShapeData {

    public static create(): any[] {
        const shapes = [
            { Label: "Hallway",
              Points: [[ // points must a nested arrays
                { x: 6, y: 0 },
                { x: 6, y: 7 },
                { x: 4, y: 7 },
                { x: 4, y: 0 }
                // last point does not have to match 1st point of the shape
                // because polygon chartType always closes a shape by connecting 1st and last point with a line
              ]]
            },
            { Label: "Entrance",
              Points: [[
                { x: 0, y: 5 },
                { x: 4, y: 5 },
                { x: 4, y: 7 },
                { x: 0, y: 7 } ]]
            },
            { Label: "Guest Bedroom",
              Points: [[{ x: 2, y: 10 }, { x: 7, y: 10 }, { x: 7, y: 7 }, { x: 2, y: 7 }] ] },
            { Label: "Bath",
              Points: [[{ x: 0, y: 10 }, { x: 2, y: 10 }, { x: 2, y: 7 }, { x: 0, y: 7 }] ] },
            { Label: "Kitchen",
              Points: [[{ x: 6, y: 7 }, { x: 10, y: 7 }, { x: 10, y: 4 }, { x: 6, y: 4 }] ] },
            { Label: "Living Room",
              Points: [[{ x: 6, y: 4 }, { x: 10, y: 4 }, { x: 10, y: 0 }, { x: 6, y: 0 }] ] },
            { Label: "Master Bedroom",
              Points: [[{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 4, y: 5 }, { x: 0, y: 5 }] ] }
        ];
        return shapes;
    }
}
