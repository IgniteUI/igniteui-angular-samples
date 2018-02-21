import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ToggleSample1Component } from "./toggle-sample-1.component";

describe("ToggleSample1Component", () => {
  let component: ToggleSample1Component;
  let fixture: ComponentFixture<ToggleSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
