import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ToggleSample3Component } from "./toggle-sample-3.component";

describe("ToggleSample3Component", () => {
  let component: ToggleSample3Component;
  let fixture: ComponentFixture<ToggleSample3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSample3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
