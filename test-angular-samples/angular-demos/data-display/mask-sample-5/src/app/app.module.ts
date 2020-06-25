import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxMaskModule,
	IgxInputGroupModule,
	IgxIconModule
 } from "igniteui-angular";
import { MaskSample5Component } from "./mask-sample-5/mask-sample-5.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		MaskSample5Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxMaskModule,
		IgxInputGroupModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
