import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IgxForComponent } from "./igxFor.component";

describe("igxForComponent", () => {
  let component: IgxForComponent;
  let fixture: ComponentFixture<IgxForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgxForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgxForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
