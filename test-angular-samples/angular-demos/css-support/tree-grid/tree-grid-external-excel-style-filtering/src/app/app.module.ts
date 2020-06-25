import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxTreeGridModule } from "igniteui-angular";
import { TreeGridExternalExcelStyleFilteringComponent } from "./tree-grid-external-excel-style-filtering/tree-grid-external-excel-style-filtering.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridExternalExcelStyleFilteringComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
