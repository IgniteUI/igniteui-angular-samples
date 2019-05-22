import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTypeScatterAreaSeriesComponent } from './map-type-scatter-area-series.component';

describe('MapTypeScatterAreaSeriesComponent', () => {
  let component: MapTypeScatterAreaSeriesComponent;
  let fixture: ComponentFixture<MapTypeScatterAreaSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTypeScatterAreaSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypeScatterAreaSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
