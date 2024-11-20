import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardSample2Component } from './card-sample-2.component';

describe('CardSample2Component', () => {
  let component: CardSample2Component;
  let fixture: ComponentFixture<CardSample2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [CardSample2Component]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
