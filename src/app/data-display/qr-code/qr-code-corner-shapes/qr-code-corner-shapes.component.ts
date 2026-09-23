import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { defineComponents, IgcQrCodeComponent } from 'igniteui-webcomponents';

defineComponents(IgcQrCodeComponent);

@Component({
    selector: 'app-qr-code-corner-shapes',
    templateUrl: './qr-code-corner-shapes.component.html',
    styleUrls: ['./qr-code-corner-shapes.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QrCodeCornerShapesComponent {
}
