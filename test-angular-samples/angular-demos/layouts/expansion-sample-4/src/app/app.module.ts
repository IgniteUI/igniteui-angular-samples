import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxExpansionPanelModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { ExpansionPanelSample4Component } from "./expansion-sample-4/expansion-sample-4.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ExpansionPanelSample4Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxExpansionPanelModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
