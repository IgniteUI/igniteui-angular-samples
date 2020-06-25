import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxIconModule,
	IgxAvatarModule,
	IgxToastModule,
	IgxExpansionPanelModule
 } from "igniteui-angular";
import { ExpansionPanelSample3Component } from "./expansion-sample-3/expansion-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ExpansionPanelSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxIconModule,
		IgxAvatarModule,
		IgxToastModule,
		IgxExpansionPanelModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
