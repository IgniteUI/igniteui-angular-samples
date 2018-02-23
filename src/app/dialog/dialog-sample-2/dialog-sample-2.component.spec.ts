import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogSample2Component } from "./dialog-sample-2.component";

describe("DialogSample2Component", () => {
  let component: DialogSample2Component;
  let fixture: ComponentFixture<DialogSample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
