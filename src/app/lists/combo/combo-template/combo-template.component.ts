import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { localData } from './local-data';
import { IgxComboComponent, IgxLabelDirective, IgxPrefixDirective, IgxIconComponent, IgxComboItemDirective, IgxComboHeaderItemDirective, IgxComboHeaderDirective, IgxComboFooterDirective, IgxComboAddItemDirective, IgxButtonDirective, IgxComboToggleIconDirective, IgxComboClearIconDirective, IgxComboEmptyDirective } from 'igniteui-angular';

@Component({
    selector: 'app-combo-template',
    styleUrls: ['./combo-template.component.scss'],
    templateUrl: './combo-template.component.html',
    imports: [IgxComboComponent, IgxLabelDirective, IgxPrefixDirective, IgxIconComponent, IgxComboItemDirective, IgxComboHeaderItemDirective, IgxComboHeaderDirective, IgxComboFooterDirective, IgxComboAddItemDirective, IgxButtonDirective, IgxComboToggleIconDirective, IgxComboClearIconDirective, IgxComboEmptyDirective]
})
export class ComboTemplateComponent implements OnInit {
    public lData: any[];

    constructor(public cdr: ChangeDetectorRef) {}

    public ngOnInit() {
        this.lData = localData;
    }
}
