import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetWorksheetsComponent } from "./spreadsheet-worksheets.component";

describe("SpreadsheetWorksheetsComponent", () => {
  let component: SpreadsheetWorksheetsComponent;
  let fixture: ComponentFixture<SpreadsheetWorksheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetWorksheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetWorksheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
