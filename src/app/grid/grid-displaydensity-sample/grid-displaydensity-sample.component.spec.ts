import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GridDisplayDensitySampleComponent } from "./grid-displaydensity-sample.component";

describe("GridDisplaydensitySampleComponent", () => {
  let component: GridDisplayDensitySampleComponent;
  let fixture: ComponentFixture<GridDisplayDensitySampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDisplayDensitySampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDisplayDensitySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
