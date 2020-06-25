import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxSelectModule
 } from "igniteui-angular";
import { CascadingCombos } from "./cascading-combos/cascading-combos.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CascadingCombos
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxComboModule,
		IgxSelectModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
