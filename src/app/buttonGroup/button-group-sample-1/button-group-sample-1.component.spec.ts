import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGroupSample1Component } from './button-group-sample-1.component';

describe('ButtonGroupSample1Component', () => {
  let component: ButtonGroupSample1Component;
  let fixture: ComponentFixture<ButtonGroupSample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGroupSample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGroupSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
