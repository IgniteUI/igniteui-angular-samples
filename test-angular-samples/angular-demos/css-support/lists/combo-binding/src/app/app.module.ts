import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxButtonModule,
	IgxCardModule
 } from "igniteui-angular";
import { ComboBindingComponent } from "./combo-binding/combo-binding.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ComboBindingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxComboModule,
		IgxButtonModule,
		IgxCardModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
