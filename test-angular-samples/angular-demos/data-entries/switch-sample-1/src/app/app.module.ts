import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxSwitchModule } from "igniteui-angular";
import { SwitchSample1Component } from "./switch-sample-1/switch-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SwitchSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSwitchModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
