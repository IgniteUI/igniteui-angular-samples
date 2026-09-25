import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-error-correction',
    templateUrl: './qr-code-error-correction.component.html',
    styleUrls: ['./qr-code-error-correction.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QrCodeErrorCorrectionComponent {
}
