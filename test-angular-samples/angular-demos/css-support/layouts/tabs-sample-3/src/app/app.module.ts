import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxTabsModule } from "igniteui-angular";
import { TabsSample3Component } from "./tabs-sample-3/tabs-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TabsSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTabsModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
