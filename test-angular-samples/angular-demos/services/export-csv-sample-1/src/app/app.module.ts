import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxCsvExporterService
 } from "igniteui-angular";
import { CsvExportSample1Component } from "./services/csv-export-sample-1/csv-export-sample-1.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CsvExportSample1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxGridModule
  ],
  providers: [IgxCsvExporterService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
