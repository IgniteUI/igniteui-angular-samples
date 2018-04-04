import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvExportSample1Component } from './csv-export-sample-1.component';

describe('CsvExportSample1Component', () => {
  let component: CsvExportSample1Component;
  let fixture: ComponentFixture<CsvExportSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvExportSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvExportSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
