import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-tailwind-styling',
    templateUrl: './qr-code-tailwind-styling.component.html',
    styleUrls: ['./qr-code-tailwind-styling.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QrCodeTailwindStylingComponent { }
