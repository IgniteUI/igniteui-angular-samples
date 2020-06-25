import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxAvatarModule,
	IgxExcelExporterService,
	IgxCsvExporterService
 } from "igniteui-angular";
import { TreeGridToolbarSample1Component } from "./tree-grid-toolbar-sample-1/tree-grid-toolbar-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridToolbarSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxAvatarModule
  ],
  providers: [
		IgxExcelExporterService,
		IgxCsvExporterService
	],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
