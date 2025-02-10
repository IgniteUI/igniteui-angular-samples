import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GridDisplayDensitySampleComponent } from './grid-displaydensity-sample.component';

describe('GridDisplaydensitySampleComponent', () => {
  let component: GridDisplayDensitySampleComponent;
  let fixture: ComponentFixture<GridDisplayDensitySampleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [GridDisplayDensitySampleComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDisplayDensitySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
