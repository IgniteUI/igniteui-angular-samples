import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetClipboardComponent } from "./spreadsheet-clipboard.component";

describe("SpreadsheetClipboardComponent", () => {
  let component: SpreadsheetClipboardComponent;
  let fixture: ComponentFixture<SpreadsheetClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetClipboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
