import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCustomTooltipsComponent } from './map-custom-tooltips.component';

describe('MapCustomTooltipsComponent', () => {
  let component: MapCustomTooltipsComponent;
  let fixture: ComponentFixture<MapCustomTooltipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCustomTooltipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCustomTooltipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
