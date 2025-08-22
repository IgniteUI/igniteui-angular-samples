import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridCellMergeCustomSampleComponent } from './grid-cell-merge-custom-sample.component';

describe('GridGroupBySample', () => {
  let component: GridCellMergeCustomSampleComponent;
  let fixture: ComponentFixture<GridCellMergeCustomSampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GridCellMergeCustomSampleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCellMergeCustomSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
