import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-styling',
    templateUrl: './qr-code-styling.component.html',
    styleUrls: ['./qr-code-styling.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QrCodeStylingComponent {
    public readonly value = 'https://www.infragistics.com/products/ignite-ui-web-components';
}
