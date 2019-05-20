import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTypeScatterSymbolSeriesComponent } from './map-type-scatter-symbol-series.component';

describe('MapTypeScatterSymbolSeriesComponent', () => {
  let component: MapTypeScatterSymbolSeriesComponent;
  let fixture: ComponentFixture<MapTypeScatterSymbolSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTypeScatterSymbolSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypeScatterSymbolSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
