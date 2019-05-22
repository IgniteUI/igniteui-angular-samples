import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTypeShapePolylineSeriesComponent } from './map-type-shape-polyline-series.component';

describe('MapTypeShapePolylineSeriesComponent', () => {
  let component: MapTypeShapePolylineSeriesComponent;
  let fixture: ComponentFixture<MapTypeShapePolylineSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTypeShapePolylineSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypeShapePolylineSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
