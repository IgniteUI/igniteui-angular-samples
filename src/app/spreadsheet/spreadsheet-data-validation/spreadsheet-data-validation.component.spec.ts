import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetDataValidComponent } from "./spreadsheet-data-validation.component";

describe("SpreadsheetDataValidComponent", () => {
  let component: SpreadsheetDataValidComponent;
  let fixture: ComponentFixture<SpreadsheetDataValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetDataValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetDataValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
