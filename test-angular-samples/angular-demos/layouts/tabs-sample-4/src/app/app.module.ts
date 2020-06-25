import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { IgxTabsModule } from "igniteui-angular";
import { TabsSample4Module } from "./tabs-sample-4/tabs-sample-4.module";
import { TabsSample4Component } from "./tabs-sample-4/components/tabs-sample-4.component";
import { View1Component } from "./views/view1/view1.component";
import { View2Component } from "./views/view2/view2.component";
import { View3Component } from "./views/view3/view3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TabsSample4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTabsModule,
		TabsSample4Module,
		RouterModule.forRoot([
                        { path: "view1", component: View1Component },
                        { path: "view2", component: View2Component },
                        { path: "view3", component: View3Component }
                    ])
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
