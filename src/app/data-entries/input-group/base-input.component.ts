import { AfterViewInit, Directive, HostListener, QueryList, ViewChildren } from '@angular/core';
import { IgxInputGroupComponent } from 'igniteui-angular';

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: 'input-group-sample-base'
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class BaseInputGroupSampleComponent {
    @ViewChildren(IgxInputGroupComponent) public inputGroups: QueryList<IgxInputGroupComponent>;
    public type = null;

    @HostListener('window:message', ['$event'])
    private onMessage(e: MessageEvent) {
        if (e.origin === e.data.origin && e.data.themeName) {
            this.applyInputTypeForTheme(e.data.themeName);
        }
    }

    private applyInputTypeForTheme(theme: string) {
        const themeName = theme.split('-')[1];
        switch (themeName) {
            case 'theme': this.setInputType('line'); break;
            case 'fluent': this.setInputType('fluent'); break;
            case 'bootstrap': this.setInputType('bootstrap'); break;
            default: break;
        }
    }

    private setInputType(type) {
        if (this.inputGroups && this.inputGroups.length > 0) {
            this.inputGroups.forEach(x => {
                    if (!(x.isTypeBox || x.isTypeBorder || x.isTypeSearch)) {
                        x.type = type;
                    }
                });
        }
    }
}
