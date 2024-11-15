import { Component, Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'app-mask-sample-4',
    templateUrl: './mask-sample-4.component.html',
    standalone: false
})
export class MaskSample4Component {
    public value = 100;
    public displayFormat = new DisplayFormatPipe();
    public inputFormat = new InputFormatPipe();
}

@Pipe({
    name: 'displayFormat',
    standalone: false
})
export class DisplayFormatPipe implements PipeTransform {
    public transform(value: any): string {
        if (value !== null && value !== undefined) {
            value = value.toString().trim();
            if (!value.endsWith('%')) {
                value += ' %';
            }
        }
        return value;
    }
}

@Pipe({
    name: 'inputFormat',
    standalone: false
})
export class InputFormatPipe implements PipeTransform {
    public transform(value: any): string {
        if (value !== null && value !== undefined) {
            value = value.toString().replace(/%/g, '').trim();
        }
        return value;
    }
}
