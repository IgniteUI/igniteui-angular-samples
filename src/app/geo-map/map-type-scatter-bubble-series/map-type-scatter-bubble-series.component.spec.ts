import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTypeScatterBubbleSeriesComponent } from './map-type-scatter-bubble-series.component';

describe('MapTypeScatterBubbleSeriesComponent', () => {
  let component: MapTypeScatterBubbleSeriesComponent;
  let fixture: ComponentFixture<MapTypeScatterBubbleSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapTypeScatterBubbleSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapTypeScatterBubbleSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
