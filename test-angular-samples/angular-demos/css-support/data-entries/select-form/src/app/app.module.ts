import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxSelectModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { SelectFormComponent } from "./data-entries/select/select-form/select-form.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SelectFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSelectModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
