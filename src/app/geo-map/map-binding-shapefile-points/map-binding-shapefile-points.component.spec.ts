import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBindingShapefilePointsComponent } from './map-binding-shapefile-points.component';

describe('MapBindingShapefilePointsComponent', () => {
  let component: MapBindingShapefilePointsComponent;
  let fixture: ComponentFixture<MapBindingShapefilePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBindingShapefilePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBindingShapefilePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
