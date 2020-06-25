import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxDateTimeEditorModule,
	IgxIconModule
 } from "igniteui-angular";
import { DateTimeAdvancedComponent } from "./datetime-advanced/datetime-advanced";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DateTimeAdvancedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxInputGroupModule,
		IgxDateTimeEditorModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
