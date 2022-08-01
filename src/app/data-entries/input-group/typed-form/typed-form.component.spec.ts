import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedFormComponent } from './typed-form.component';

describe('TypedFormComponent', () => {
  let component: TypedFormComponent;
  let fixture: ComponentFixture<TypedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
