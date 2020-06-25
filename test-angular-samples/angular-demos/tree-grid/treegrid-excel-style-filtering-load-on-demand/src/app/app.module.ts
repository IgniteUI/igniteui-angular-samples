import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxIconModule
 } from "igniteui-angular";
import { TreeGridExcelStyleFilteringLoadOnDemandComponent } from "./tree-grid/tree-grid-excel-style-filtering-load-on-demand/tree-grid-excel-style-filtering-load-on-demand.component";
import { RemoteValuesService } from "./tree-grid/tree-grid-excel-style-filtering-load-on-demand/remoteValues.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridExcelStyleFilteringLoadOnDemandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxIconModule
  ],
  providers: [RemoteValuesService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
