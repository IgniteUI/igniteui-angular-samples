import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxProgressBarModule } from "igniteui-angular";
import { LinearProgressbarSample1Component } from "./linear-progressbar-sample-1/linear-progressbar-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LinearProgressbarSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxProgressBarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
