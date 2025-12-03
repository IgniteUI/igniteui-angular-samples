import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PdfExportComponent } from './pdf-export.component';

describe('PdfExportComponent', () => {
    let component: PdfExportComponent;
    let fixture: ComponentFixture<PdfExportComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [PdfExportComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PdfExportComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
