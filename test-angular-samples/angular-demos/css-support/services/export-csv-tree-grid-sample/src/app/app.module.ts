import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxTreeGridModule,
	IgxCsvExporterService
 } from "igniteui-angular";
import { TreeGridCsvExportSample1Component } from "./services/csv-export-tree-grid-sample/csv-export-tree-grid-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridCsvExportSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTreeGridModule
  ],
  providers: [IgxCsvExporterService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
