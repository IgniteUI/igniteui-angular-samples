import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ToggleSample2Component } from "./toggle-sample-2.component";

describe("ToggleSample2Component", () => {
  let component: ToggleSample2Component;
  let fixture: ComponentFixture<ToggleSample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
