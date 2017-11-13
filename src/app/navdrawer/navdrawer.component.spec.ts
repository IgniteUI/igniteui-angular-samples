import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavdrawerComponent } from './navdrawer.component';

describe('NavdrawerComponent', () => {
  let component: NavdrawerComponent;
  let fixture: ComponentFixture<NavdrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavdrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavdrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
