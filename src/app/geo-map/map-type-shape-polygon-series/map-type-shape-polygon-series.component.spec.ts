import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTypeShapePolygonSeriesComponent } from './map-type-shape-polygon-series.component';

describe('MapTypeShapePolygonSeriesComponent', () => {
  let component: MapTypeShapePolygonSeriesComponent;
  let fixture: ComponentFixture<MapTypeShapePolygonSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTypeShapePolygonSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypeShapePolygonSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
