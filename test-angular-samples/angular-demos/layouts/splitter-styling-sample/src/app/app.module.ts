import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxSplitterModule } from "igniteui-angular";
import { SplitterStylingSampleComponent } from "./splitter-styling-sample/splitter-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SplitterStylingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSplitterModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
