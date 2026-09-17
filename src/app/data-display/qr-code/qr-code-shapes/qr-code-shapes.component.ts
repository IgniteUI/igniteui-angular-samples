import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-shapes',
    templateUrl: './qr-code-shapes.component.html',
    styleUrls: ['./qr-code-shapes.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QrCodeShapesComponent {
}
