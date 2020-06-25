import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxCheckboxModule,
	IgxDatePickerModule,
	IgxDialogModule,
	IgxGridModule,
	IgxInputGroupModule,
	IgxIconModule,
	IgxComboModule,
	IgxRippleModule
 } from "igniteui-angular";
import { GridEditingSampleComponent } from "./grid/grid-editing-sample/grid-editing-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridEditingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxButtonModule,
		IgxCheckboxModule,
		IgxDatePickerModule,
		IgxDialogModule,
		IgxGridModule,
		IgxInputGroupModule,
		IgxIconModule,
		IgxRippleModule,
		IgxComboModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
