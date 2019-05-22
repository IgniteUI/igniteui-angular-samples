import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBindingShapefilePolygonsComponent } from './map-binding-shapefile-polygons.component';

describe('MapBindingShapefilePolygonsComponent', () => {
  let component: MapBindingShapefilePolygonsComponent;
  let fixture: ComponentFixture<MapBindingShapefilePolygonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBindingShapefilePolygonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBindingShapefilePolygonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
