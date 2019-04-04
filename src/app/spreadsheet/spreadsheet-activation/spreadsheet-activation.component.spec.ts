import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetActivationComponent } from "./spreadsheet-activation.component";

describe("SpreadsheetActivationComponent", () => {
  let component: SpreadsheetActivationComponent;
  let fixture: ComponentFixture<SpreadsheetActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
