import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetFilterDialogComponent } from "./spreadsheet-filter-dialog.component";

describe("SpreadsheetFilterDialogComponent", () => {
  let component: SpreadsheetFilterDialogComponent;
  let fixture: ComponentFixture<SpreadsheetFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
