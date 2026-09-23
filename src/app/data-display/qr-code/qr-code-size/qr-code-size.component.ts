import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-size',
    templateUrl: './qr-code-size.component.html',
    styleUrls: ['./qr-code-size.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QrCodeSizeComponent {
    public readonly value = 'https://www.infragistics.com/products/ignite-ui-web-components';
}
