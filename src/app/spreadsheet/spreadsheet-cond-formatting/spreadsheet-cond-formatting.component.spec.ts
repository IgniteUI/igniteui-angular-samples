import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetCondFormatComponent } from "./spreadsheet-cond-formatting.component";

describe("SpreadsheetCondFormatComponent", () => {
  let component: SpreadsheetCondFormatComponent;
  let fixture: ComponentFixture<SpreadsheetCondFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetCondFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetCondFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
