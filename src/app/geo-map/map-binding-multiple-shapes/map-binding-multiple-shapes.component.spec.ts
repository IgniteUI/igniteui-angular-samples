import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBindingMultipleShapesComponent } from './map-binding-multiple-shapes.component';

describe('MapBindingMultipleShapesComponent', () => {
  let component: MapBindingMultipleShapesComponent;
  let fixture: ComponentFixture<MapBindingMultipleShapesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBindingMultipleShapesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBindingMultipleShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
