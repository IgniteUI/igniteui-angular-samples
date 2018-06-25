import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEditingSampleComponent } from './grid-editing-sample.component';

describe('GridEditingSampleComponent', () => {
  let component: GridEditingSampleComponent;
  let fixture: ComponentFixture<GridEditingSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEditingSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEditingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
