import { Component, Pipe, PipeTransform } from '@angular/core';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxMaskDirective, IgxTextSelectionDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-mask-sample-4',
    templateUrl: './mask-sample-4.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxMaskDirective, IgxTextSelectionDirective]
})
export class MaskSample4Component {
    public value = 100;
    public displayFormat = new DisplayFormatPipe();
    public inputFormat = new InputFormatPipe();
}

@Pipe({
    name: 'displayFormat'
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
    name: 'inputFormat'
})
export class InputFormatPipe implements PipeTransform {
    public transform(value: any): string {
        if (value !== null && value !== undefined) {
            value = value.toString().replace(/%/g, '').trim();
        }
        return value;
    }
}
