import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridCellMergeSampleComponent } from './grid-cell-merge-sample.component';

describe('GridGroupBySample', () => {
  let component: GridCellMergeSampleComponent;
  let fixture: ComponentFixture<GridCellMergeSampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GridCellMergeSampleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCellMergeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
