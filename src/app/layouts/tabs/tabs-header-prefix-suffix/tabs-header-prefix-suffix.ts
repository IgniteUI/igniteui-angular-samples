import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-header-prefix-suffix',
    templateUrl: './tabs-header-prefix-suffix.html'
})
export class TabsHeaderPrefixSuffixComponent {
    public tabs = [{
        image: 'https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg',
        header: 'Tab1',
        content: 'Content1'
    }, {
        image: 'https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg',
        header: 'Tab2',
        content: 'Content2'
    }, {
        image: 'https://static.infragistics.com/marketing/Website/products/ignite-ui-landing/ignite-ui-logo.svg',
        header: 'Tab3',
        content: 'Content3'
    }];

    closeTab(index: number) {
        this.tabs.splice(index, 1);
    }
}
