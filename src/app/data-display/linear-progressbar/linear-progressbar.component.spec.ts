import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LinearProgressbarComponent } from './linear-progressbar.component';

describe('LinearProgressbarComponent', () => {
  let component: LinearProgressbarComponent;
  let fixture: ComponentFixture<LinearProgressbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [LinearProgressbarComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
