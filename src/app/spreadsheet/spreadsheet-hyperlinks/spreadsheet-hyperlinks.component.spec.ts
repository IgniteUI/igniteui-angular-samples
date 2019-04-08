import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetHyperlinksComponent } from "./spreadsheet-hyperlinks.component";

describe("SpreadsheetHyperlinksComponent", () => {
  let component: SpreadsheetHyperlinksComponent;
  let fixture: ComponentFixture<SpreadsheetHyperlinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetHyperlinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetHyperlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
