import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetOverviewComponent } from "./spreadsheet-overview.component";

describe("SpreadsheetOverviewComponent", () => {
  let component: SpreadsheetOverviewComponent;
  let fixture: ComponentFixture<SpreadsheetOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
