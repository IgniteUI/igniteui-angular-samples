import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LinearProgressbarComponent } from "./linear-progressbar.component";

describe("LinearProgressbarComponent", () => {
  let component: LinearProgressbarComponent;
  let fixture: ComponentFixture<LinearProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
