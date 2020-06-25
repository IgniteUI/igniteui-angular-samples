import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxCsvExporterService } from "igniteui-angular";
import { CsvExportComponent } from "./services/export-csv/csv-export.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		CsvExportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [IgxCsvExporterService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
