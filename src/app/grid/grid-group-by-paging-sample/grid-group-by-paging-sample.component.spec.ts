import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridGroupByPagingSampleComponent } from './grid-group-by-paging-sample.component';

describe('GridGroupByPagingSampleComponent', () => {
  let component: GridGroupByPagingSampleComponent;
  let fixture: ComponentFixture<GridGroupByPagingSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridGroupByPagingSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridGroupByPagingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
