import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupSample7Component } from './input-group-sample-7.component';

describe('InputGroupSample7Component', () => {
  let component: InputGroupSample7Component;
  let fixture: ComponentFixture<InputGroupSample7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [InputGroupSample7Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(InputGroupSample7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inputs with matching id and for attributes', () => {
    const compiled = fixture.nativeElement;
    
    // Check fullName input and label
    const fullNameInput = compiled.querySelector('#fullName');
    const fullNameLabel = compiled.querySelector('label[for="fullName"]');
    expect(fullNameInput).toBeTruthy();
    expect(fullNameLabel).toBeTruthy();
    
    // Check emailAddress input and label
    const emailInput = compiled.querySelector('#emailAddress');
    const emailLabel = compiled.querySelector('label[for="emailAddress"]');
    expect(emailInput).toBeTruthy();
    expect(emailLabel).toBeTruthy();
    
    // Check phoneNumber input and label
    const phoneInput = compiled.querySelector('#phoneNumber');
    const phoneLabel = compiled.querySelector('label[for="phoneNumber"]');
    expect(phoneInput).toBeTruthy();
    expect(phoneLabel).toBeTruthy();
    
    // Check userName input and label
    const userNameInput = compiled.querySelector('#userName');
    const userNameLabel = compiled.querySelector('label[for="userName"]');
    expect(userNameInput).toBeTruthy();
    expect(userNameLabel).toBeTruthy();
  });
});
