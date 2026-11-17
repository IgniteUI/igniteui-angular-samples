import { Component, inject } from '@angular/core';
import { IgxIconComponent, IgxIconService } from 'igniteui-angular/icon';
import { IgxTabContentComponent, IgxTabHeaderComponent, IgxTabHeaderIconDirective, IgxTabHeaderLabelDirective, IgxTabItemComponent, IgxTabsComponent } from 'igniteui-angular/tabs';

const shoppingBasketIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.21 8.99953L12.83 2.43953C12.64 2.15953 12.32 2.01953 12 2.01953C11.68 2.01953 11.36 2.15953 11.17 2.44953L6.79 8.99953H2C1.45 8.99953 1 9.44953 1 9.99953C1 10.0895 1.01 10.1795 1.04 10.2695L3.58 19.5395C3.81 20.3795 4.58 20.9995 5.5 20.9995H18.5C19.42 20.9995 20.19 20.3795 20.43 19.5395L22.97 10.2695L23 9.99953C23 9.44953 22.55 8.99953 22 8.99953H17.21ZM9 8.99953L12 4.59953L15 8.99953H9ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z"/></svg>';
const deliveryIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12L20 7H15V5H2V15H4.184C4.06556 15.3203 4.00331 15.6586 4 16C4 17.6569 5.34315 19 7 19C8.65685 19 10 17.6569 10 16C9.99669 15.6586 9.93444 15.3203 9.816 15H15.184C15.0655 15.3202 15.0032 15.6586 15 16C15 17.6569 16.3431 19 18 19C19.6569 19 21 17.6569 21 16C20.9968 15.6586 20.9345 15.3202 20.816 15H22V12ZM7 17C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15C7.55228 15 8 15.4477 8 16C8 16.5523 7.55228 17 7 17ZM18 17C17.4477 17 17 16.5523 17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17ZM17 12V9H19L20 12H17Z"/></svg>';
const creditCardIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"/></svg>';

interface Step {
    label: string;
    icon: string;
}

@Component({
    selector: 'app-tabs-type',
    styleUrls: ['./tabs-type.component.scss'],
    templateUrl: './tabs-type.component.html',
    imports: [IgxTabsComponent, IgxTabItemComponent, IgxTabHeaderComponent, IgxTabHeaderLabelDirective, IgxTabHeaderIconDirective, IgxTabContentComponent, IgxIconComponent]
})
export class TabsTypeComponent {
    public steps: Step[] = [
        { label: 'Cart', icon: 'shopping_basket' },
        { label: 'Shipping', icon: 'delivery' },
        { label: 'Payment', icon: 'credit_card' }
    ];

    constructor() {
        const iconService = inject(IgxIconService);
        iconService.addSvgIconFromText('shopping_basket', shoppingBasketIcon, 'material');
        iconService.addSvgIconFromText('delivery', deliveryIcon, 'material');
        iconService.addSvgIconFromText('credit_card', creditCardIcon, 'material');
    }
}
