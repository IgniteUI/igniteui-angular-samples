import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBindingDataJsonPointsComponent } from './map-binding-data-json-points.component';

describe('MapBindingDataJsonPointsComponent', () => {
  let component: MapBindingDataJsonPointsComponent;
  let fixture: ComponentFixture<MapBindingDataJsonPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBindingDataJsonPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBindingDataJsonPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
