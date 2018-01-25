import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSample3Component } from './card-sample-3.component';

describe('CardSample3Component', () => {
  let component: CardSample3Component;
  let fixture: ComponentFixture<CardSample3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSample3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSample3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
