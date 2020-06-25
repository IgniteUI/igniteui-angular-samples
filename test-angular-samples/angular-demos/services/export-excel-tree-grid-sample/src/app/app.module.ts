import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxTreeGridModule,
	IgxExcelExporterService,
	IgxButtonModule
 } from "igniteui-angular";
import { TreeGridExcelExportSample1Component } from "./services/export-excel/excel-export-tree-grid-sample/excel-export-tree-grid-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridExcelExportSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTreeGridModule,
		IgxButtonModule
  ],
  providers: [IgxExcelExporterService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
