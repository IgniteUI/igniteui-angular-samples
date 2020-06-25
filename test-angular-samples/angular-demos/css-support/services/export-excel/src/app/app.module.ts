import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxExcelExporterService } from "igniteui-angular";
import { ExcelExportComponent } from "./services/export-excel/excel-export.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ExcelExportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [IgxExcelExporterService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
