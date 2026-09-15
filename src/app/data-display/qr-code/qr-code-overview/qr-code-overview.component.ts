import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';
import { IgxRadioGroupDirective, IgxRadioComponent } from 'igniteui-angular/radio';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-overview',
    templateUrl: './qr-code-overview.component.html',
    styleUrls: ['./qr-code-overview.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [FormsModule, IgxRadioGroupDirective, IgxRadioComponent, IgxSwitchComponent],
})
export class QrCodeOverviewComponent {
    public shape: 'square' | 'circle' | 'rounded' = 'square';
    public size = 120;
    public showLogo = true;

    public readonly value = 'https://www.infragistics.com/products/ignite-ui-web-components';
    public readonly logoSrc = 'https://static.infragistics.com/marketing/Website/products/ignite-ui/shared/ignite-ui-logo-light-background-horizontal.svg';
}
