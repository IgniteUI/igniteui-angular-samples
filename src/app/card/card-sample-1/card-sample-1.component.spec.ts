import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardSample1Component } from "./card-sample-1.component";

describe("CardSample1Component", () => {
  let component: CardSample1Component;
  let fixture: ComponentFixture<CardSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
