import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpreadsheetAdapterComponent } from './spreadsheet-adapter.component';

describe('SpreadsheetAdapterComponent', () => {
  let component: SpreadsheetAdapterComponent;
  let fixture: ComponentFixture<SpreadsheetAdapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpreadsheetAdapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsheetAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
