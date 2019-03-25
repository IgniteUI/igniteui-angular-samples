import { Component, Pipe, PipeTransform } from "@angular/core";

@Component({
    selector: "app-mask-sample-4",
    templateUrl: "./mask-sample-4.component.html"
})

export class MaskSample4Component {

    public value = 1255;
    public displayFormat = new DisplayFormatPipe();
    public inputFormat = new InputFormatPipe();
}

@Pipe({ name: "displayFormat" })
export class DisplayFormatPipe implements PipeTransform {
    public transform(value: any): string {
        let val = value;
        if (val.indexOf(" %") === -1) {
            val += " %";
        }
        return val;
    }
}

@Pipe({ name: "inputFormat" })
export class InputFormatPipe implements PipeTransform {
    public transform(value: any): string {
        let val = value;
        if (val.indexOf(" %") !== -1) {
            val = val.replace(new RegExp(" %", "g"), "");
        }
        return val;
    }
}
