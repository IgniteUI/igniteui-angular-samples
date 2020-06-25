import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { HGridExternalExcelStyleFilteringComponent } from "./hierarchical-grid/hierarchical-grid-external-excel-style-filtering/hierarchical-grid-external-excel-style-filtering.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridExternalExcelStyleFilteringComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
