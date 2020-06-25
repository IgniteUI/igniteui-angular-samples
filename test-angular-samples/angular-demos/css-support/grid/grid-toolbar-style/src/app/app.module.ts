import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridToolbarStyleComponent } from "./grid/grid-toolbar-style/grid-toolbar-style.component";
import { 
	IgxAvatarModule,
	IgxGridModule,
	IgxExcelExporterService,
	IgxCsvExporterService
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridToolbarStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxAvatarModule,
		IgxGridModule
  ],
  providers: [
		IgxExcelExporterService,
		IgxCsvExporterService
	],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
