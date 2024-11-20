import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CsvExportComponent } from './csv-export.component';

describe('CsvExportComponent', () => {
  let component: CsvExportComponent;
  let fixture: ComponentFixture<CsvExportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [CsvExportComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
