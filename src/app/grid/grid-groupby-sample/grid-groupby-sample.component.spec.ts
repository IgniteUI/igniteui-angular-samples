import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridGroupBySampleComponent } from './grid-groupby-sample.component';

describe('GridGroupBySample', () => {
  let component: GridGroupBySampleComponent;
  let fixture: ComponentFixture<GridGroupBySampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GridGroupBySampleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGroupBySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
