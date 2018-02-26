import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavbarSample1Component } from "./navbar-sample-1.component";

describe("NavbarSample1Component", () => {
  let component: NavbarSample1Component;
  let fixture: ComponentFixture<NavbarSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
