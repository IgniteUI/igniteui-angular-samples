import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBindingShapefilePolylinesComponent } from './map-binding-shapefile-polylines.component';

describe('MapBindingShapefilePolylinesComponent', () => {
  let component: MapBindingShapefilePolylinesComponent;
  let fixture: ComponentFixture<MapBindingShapefilePolylinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBindingShapefilePolylinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBindingShapefilePolylinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
