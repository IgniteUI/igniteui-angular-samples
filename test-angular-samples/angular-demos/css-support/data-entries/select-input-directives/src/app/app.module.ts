import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxSelectModule,
	IgxInputGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { SelectInputDirectivesComponent } from "./data-entries/select/select-input-directives/select-input-directives";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SelectInputDirectivesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSelectModule,
		IgxInputGroupModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
