import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxProgressBarModule } from "igniteui-angular";
import { LinearProgressbarSample2Component } from "./linear-progressbar-sample-2/linear-progressbar-sample-2.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LinearProgressbarSample2Component
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
