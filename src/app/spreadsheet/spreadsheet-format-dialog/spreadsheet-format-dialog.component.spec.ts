import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetFormatDialogComponent } from "./spreadsheet-format-dialog.component";

describe("SpreadsheetFormatDialogComponent", () => {
  let component: SpreadsheetFormatDialogComponent;
  let fixture: ComponentFixture<SpreadsheetFormatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetFormatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetFormatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
