import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBindingMultipleSourcesComponent } from './map-binding-multiple-sources.component';

describe('MapBindingMultipleSourcesComponent', () => {
  let component: MapBindingMultipleSourcesComponent;
  let fixture: ComponentFixture<MapBindingMultipleSourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBindingMultipleSourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBindingMultipleSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
