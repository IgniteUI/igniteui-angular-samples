import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxRadioModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { RadioGroupSampleComponent } from "./radio-group-sample/radio-group-sample.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RadioGroupSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxRadioModule,
		IgxInputGroupModule,
		ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
