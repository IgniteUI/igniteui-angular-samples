import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardSample3Component } from './card-sample-3.component';

describe('CardSample3Component', () => {
  let component: CardSample3Component;
  let fixture: ComponentFixture<CardSample3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [CardSample3Component]
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
