import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDrawerHierarchicalComponent } from './nav-drawer-hierarchical.component';

describe('NavDrawerHierarchicalComponent', () => {
  let component: NavDrawerHierarchicalComponent;
  let fixture: ComponentFixture<NavDrawerHierarchicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NavDrawerHierarchicalComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NavDrawerHierarchicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
