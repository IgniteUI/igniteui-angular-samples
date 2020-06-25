import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxSelectModule,
	IgxInputGroupModule,
	IgxDropDownModule,
	IgxIconModule,
	IgxButtonGroupModule,
	IgxButtonModule
 } from "igniteui-angular";
import { SelectHeaderFooterComponent } from "./select-header-footer/select-header-footer.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SelectHeaderFooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSelectModule,
		IgxInputGroupModule,
		IgxDropDownModule,
		IgxIconModule,
		IgxButtonGroupModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
