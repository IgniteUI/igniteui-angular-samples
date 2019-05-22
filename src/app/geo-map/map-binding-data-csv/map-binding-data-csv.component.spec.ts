import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBindingDataCsvComponent } from './map-binding-data-csv.component';

describe('MapBindingDataCsvComponent', () => {
  let component: MapBindingDataCsvComponent;
  let fixture: ComponentFixture<MapBindingDataCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBindingDataCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBindingDataCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
