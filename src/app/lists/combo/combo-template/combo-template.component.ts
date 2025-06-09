import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { localData } from './local-data';
import { IgxComboComponent, IgxLabelDirective, IgxPrefixDirective, IgxIconComponent, IgxComboItemDirective, IgxComboHeaderItemDirective, IgxComboHeaderDirective, IgxComboFooterDirective, IgxComboAddItemDirective, IgxButtonDirective, IgxComboToggleIconDirective, IgxComboClearIconDirective, IgxComboEmptyDirective } from 'igniteui-angular';

@Component({
    selector: 'app-combo-template',
    styleUrls: ['./combo-template.component.scss'],
    templateUrl: './combo-template.component.html',
    imports: [IgxComboComponent, IgxLabelDirective, IgxPrefixDirective, IgxIconComponent, IgxComboItemDirective, IgxComboHeaderItemDirective, IgxComboHeaderDirective, IgxComboFooterDirective, IgxComboAddItemDirective, IgxButtonDirective, IgxComboToggleIconDirective, IgxComboClearIconDirective, IgxComboEmptyDirective]
})
export class ComboTemplateComponent implements OnInit {
    cdr = inject(ChangeDetectorRef);

    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
