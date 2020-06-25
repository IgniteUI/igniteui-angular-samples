import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBottomNavModule } from "igniteui-angular";
import { TabbarSample2Component } from "./tabbar-sample-2/tabbar-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TabbarSample2Component
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
