import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GridGroupBySummarySampleComponent } from "./grid-groupby-summary-sample.component";

describe("GridGroupBySummarySample", () => {
  let component: GridGroupBySummarySampleComponent;
  let fixture: ComponentFixture<GridGroupBySummarySampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridGroupBySummarySampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGroupBySummarySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
