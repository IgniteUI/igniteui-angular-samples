import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxSnackbarModule,
	IgxMaskModule,
	IgxInputGroupModule,
	IgxTextSelectionModule
 } from "igniteui-angular";
import { MaskSample1Component } from "./mask-sample-1/mask-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MaskSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSnackbarModule,
		IgxMaskModule,
		IgxInputGroupModule,
		IgxTextSelectionModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
