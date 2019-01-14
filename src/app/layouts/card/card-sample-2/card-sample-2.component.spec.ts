import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardSample2Component } from "./card-sample-2.component";

describe("CardSample2Component", () => {
  let component: CardSample2Component;
  let fixture: ComponentFixture<CardSample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
