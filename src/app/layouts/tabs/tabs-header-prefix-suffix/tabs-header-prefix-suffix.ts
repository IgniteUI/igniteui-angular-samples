import { Component } from '@angular/core';

@Component({
    selector: 'app-tabs-header-prefix-suffix',
    templateUrl: './tabs-header-prefix-suffix.html',
    standalone: false
})
export class TabsHeaderPrefixSuffixComponent {
    public tabs = [{
        image: 'assets/images/card/avatars/igLogo.png',
        header: 'Tab1',
        content: 'Content1'
    }, {
        image: 'assets/images/card/avatars/igLogo.png',
        header: 'Tab2',
        content: 'Content2'
    }, {
        image: 'assets/images/card/avatars/igLogo.png',
        header: 'Tab3',
        content: 'Content3'
    }];

    closeTab(index: number) {
        this.tabs.splice(index, 1);
    }
}
