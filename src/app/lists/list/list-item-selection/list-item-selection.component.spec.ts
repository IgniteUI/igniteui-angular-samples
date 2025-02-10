import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemSelectionComponent } from './list-item-selection.component';

describe('ListItemSelectionComponent', () => {
  let component: ListItemSelectionComponent;
  let fixture: ComponentFixture<ListItemSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ListItemSelectionComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ListItemSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
