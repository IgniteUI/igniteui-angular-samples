import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DialogSample1Component } from "./dialog-sample-1.component";

describe("DialogSample1Component", () => {
  let component: DialogSample1Component;
  let fixture: ComponentFixture<DialogSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
