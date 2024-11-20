import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridSample3Component } from './grid-sample-3.component';

describe('GridSample3Component', () => {
  let component: GridSample3Component;
  let fixture: ComponentFixture<GridSample3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GridSample3Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
