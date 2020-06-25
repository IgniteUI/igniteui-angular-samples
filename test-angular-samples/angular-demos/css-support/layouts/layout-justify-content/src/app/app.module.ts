import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxLayoutModule,
	IgxButtonGroupModule,
	IgxButtonModule,
	IgxRippleModule
 } from "igniteui-angular";
import { LayoutJustifyContentComponent } from "./layout/layout-justify-content/layout-justify-content.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LayoutJustifyContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxLayoutModule,
		IgxButtonGroupModule,
		IgxButtonModule,
		IgxRippleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
