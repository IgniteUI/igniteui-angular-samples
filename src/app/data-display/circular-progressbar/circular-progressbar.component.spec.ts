import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CircularProgressbarComponent } from './circular-progressbar.component';

describe('CircularProgressbarComponent', () => {
  let component: CircularProgressbarComponent;
  let fixture: ComponentFixture<CircularProgressbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [CircularProgressbarComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
