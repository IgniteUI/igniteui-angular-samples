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
import { TreeGridToolbarStyleComponent } from "./tree-grid-toolbar-style/tree-grid-toolbar-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridToolbarStyleComponent
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
