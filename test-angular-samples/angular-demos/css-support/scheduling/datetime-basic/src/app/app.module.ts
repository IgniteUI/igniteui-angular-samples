import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxDateTimeEditorModule,
	IgxTextSelectionModule
 } from "igniteui-angular";
import { DateTimeBasicComponent } from "./datetime-basic/datetime-basic.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DateTimeBasicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxInputGroupModule,
		IgxDateTimeEditorModule,
		IgxTextSelectionModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
