import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-logo',
    templateUrl: './qr-code-logo.component.html',
    styleUrls: ['./qr-code-logo.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QrCodeLogoComponent {
    public readonly logoSrc = 'https://static.infragistics.com/marketing/Website/products/ignite-ui/shared/ignite-ui-logo-light-background-horizontal.svg';
}
