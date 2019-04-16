import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetSortDialogComponent } from "./spreadsheet-sort-dialog.component";

describe("SpreadsheetSortDialogComponent", () => {
  let component: SpreadsheetSortDialogComponent;
  let fixture: ComponentFixture<SpreadsheetSortDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetSortDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetSortDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
