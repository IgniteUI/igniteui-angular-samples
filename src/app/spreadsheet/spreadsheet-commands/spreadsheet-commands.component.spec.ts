import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SpreadsheetCommandsComponent } from "./spreadsheet-commands.component";

describe("SpreadsheetCommandsComponent", () => {
  let component: SpreadsheetCommandsComponent;
  let fixture: ComponentFixture<SpreadsheetCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
