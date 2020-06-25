import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TabbarSample3Module } from "./tabbar-sample-3/tabbar-sample-3.module";
import { TabbarSample3Component } from "./tabbar-sample-3/components/tabbar-sample-3.component";
import { IgxBottomNavModule } from "igniteui-angular";
import { RouterModule } from "@angular/router";
import { TabbarView1Component } from "./views/view1/view1.component";
import { TabbarView2Component } from "./views/view2/view2.component";
import { TabbarView3Component } from "./views/view3/view3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TabbarSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBottomNavModule,
		TabbarSample3Module,
		RouterModule,
		RouterModule.forRoot([
                        { path: "tabbar-view1", component: TabbarView1Component },
                        { path: "tabbar-view2", component: TabbarView2Component },
                        { path: "tabbar-view3", component: TabbarView3Component }
                    ])
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
