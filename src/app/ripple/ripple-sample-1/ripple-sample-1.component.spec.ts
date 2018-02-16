import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleSample1Component } from './ripple-sample-1.component';

describe('RippleSample1Component', () => {
  let component: RippleSample1Component;
  let fixture: ComponentFixture<RippleSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippleSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
