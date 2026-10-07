import { Component } from '@angular/core';
import { IgxChipComponent } from 'igniteui-angular/chips';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-chip-layout',
    templateUrl: './chip-layout.component.html',
    styleUrls: ['./chip-layout.component.scss'],
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective, IgxSuffixDirective]
})
export class ChipLayoutComponent { }
