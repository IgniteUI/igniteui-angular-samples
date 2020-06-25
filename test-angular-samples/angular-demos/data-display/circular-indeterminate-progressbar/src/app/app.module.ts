import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxProgressBarModule } from "igniteui-angular";
import { CircularIndeterminateProgressbarComponent } from "./circular-indeterminate-progressbar/circular-indeterminate-progressbar.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CircularIndeterminateProgressbarComponent
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
