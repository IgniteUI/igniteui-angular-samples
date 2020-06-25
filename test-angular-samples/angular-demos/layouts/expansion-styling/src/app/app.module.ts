import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxButtonModule,
	IgxExpansionPanelModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { ExpansionPanelStylingComponent } from "./expansion-styling/expansion-styling.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ExpansionPanelStylingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxButtonModule,
		IgxExpansionPanelModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
