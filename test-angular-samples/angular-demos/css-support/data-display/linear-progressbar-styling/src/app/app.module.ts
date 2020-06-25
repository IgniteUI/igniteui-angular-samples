import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxProgressBarModule } from "igniteui-angular";
import { LinearProgressbarStylingComponent } from ".//linear-progressbar-styling-sample/linear-progressbar-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LinearProgressbarStylingComponent
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
