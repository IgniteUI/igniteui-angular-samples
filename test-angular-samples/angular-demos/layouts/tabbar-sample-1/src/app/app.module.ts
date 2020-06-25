import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBottomNavModule } from "igniteui-angular";
import { TabbarSample1Component } from "./tabbar-sample-1/tabbar-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TabbarSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBottomNavModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
