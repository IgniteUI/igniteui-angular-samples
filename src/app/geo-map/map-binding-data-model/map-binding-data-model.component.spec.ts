import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBindingDataModelComponent } from './map-binding-data-model.component';

describe('MapBindingDataModelComponent', () => {
  let component: MapBindingDataModelComponent;
  let fixture: ComponentFixture<MapBindingDataModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBindingDataModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBindingDataModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
