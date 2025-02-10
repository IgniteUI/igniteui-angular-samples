import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExcelExportComponent } from './excel-export.component';

describe('ExcelExportComponent', () => {
  let component: ExcelExportComponent;
  let fixture: ComponentFixture<ExcelExportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [ExcelExportComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
