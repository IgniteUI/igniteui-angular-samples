import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LinearProgressbarSample2Component } from "./linear-progressbar-sample-2.component";

describe("LinearProgressbarSample2Component", () => {
  let component: LinearProgressbarSample2Component;
  let fixture: ComponentFixture<LinearProgressbarSample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearProgressbarSample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearProgressbarSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
