import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CircularProgressbarComponent } from "./circular-progressbar.component";

describe("CircularProgressbarComponent", () => {
  let component: CircularProgressbarComponent;
  let fixture: ComponentFixture<CircularProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
