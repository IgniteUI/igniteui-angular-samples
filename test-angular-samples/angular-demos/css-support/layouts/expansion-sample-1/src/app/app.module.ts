import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxExpansionPanelModule
 } from "igniteui-angular";
import { ExpansionPanelSample1Component } from "./expansion-sample-1/expansion-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ExpansionPanelSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxExpansionPanelModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
