import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTypeScatterDensitySeriesComponent } from './map-type-scatter-density-series.component';

describe('MapTypeScatterDensitySeriesComponent', () => {
  let component: MapTypeScatterDensitySeriesComponent;
  let fixture: ComponentFixture<MapTypeScatterDensitySeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTypeScatterDensitySeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypeScatterDensitySeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
