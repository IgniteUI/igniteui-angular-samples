import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { TabbarComponent } from "./tabbar.component";

describe("TabbarComponent", () => {
  let component: TabbarComponent;
  let fixture: ComponentFixture<TabbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
