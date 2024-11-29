import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCheckboxModule, IgxDatePickerModule, IgxTreeGridModule } from 'igniteui-angular';
import { TreeGrid1Component } from './tree-grid1.component';

describe('TreeGrid1Component', () => {
  let component: TreeGrid1Component;
  let fixture: ComponentFixture<TreeGrid1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, IgxTreeGridModule, IgxDatePickerModule, IgxCheckboxModule, TreeGrid1Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
