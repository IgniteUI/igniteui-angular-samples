import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LinearProgressbarSample1Component } from "./linear-progressbar-sample-1.component";

describe("LinearProgressbarSample1Component", () => {
  let component: LinearProgressbarSample1Component;
  let fixture: ComponentFixture<LinearProgressbarSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearProgressbarSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearProgressbarSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
