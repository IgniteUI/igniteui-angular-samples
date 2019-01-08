import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogSample3Component } from "./dialog-sample-3.component";

describe("DialogSample3Component", () => {
  let component: DialogSample3Component;
  let fixture: ComponentFixture<DialogSample3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSample3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
