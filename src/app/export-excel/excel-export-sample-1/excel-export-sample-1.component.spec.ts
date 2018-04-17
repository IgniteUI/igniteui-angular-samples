import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExcelExportSample1Component } from "./excel-export-sample-1.component";

describe("ExcelExportSample1Component", () => {
  let component: ExcelExportSample1Component;
  let fixture: ComponentFixture<ExcelExportSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelExportSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelExportSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
