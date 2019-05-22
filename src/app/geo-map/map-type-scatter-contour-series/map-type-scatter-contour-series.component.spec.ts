import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTypeScatterContourSeriesComponent } from './map-type-scatter-contour-series.component';

describe('MapTypeScatterContourSeriesComponent', () => {
  let component: MapTypeScatterContourSeriesComponent;
  let fixture: ComponentFixture<MapTypeScatterContourSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTypeScatterContourSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypeScatterContourSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
