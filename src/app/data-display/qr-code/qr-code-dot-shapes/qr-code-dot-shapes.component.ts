import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-dot-shapes',
    templateUrl: './qr-code-dot-shapes.component.html',
    styleUrls: ['./qr-code-dot-shapes.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QrCodeDotShapesComponent {
}
