import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { HierarchicalGridExcelStyleFilteringLoadOnDemandComponent } from "./hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand/hierarchical-grid-excel-style-filtering-load-on-demand.component";
import { RemoteValuesService } from "./hierarchical-grid/hierarchical-grid-excel-style-filtering-load-on-demand/remoteValues.service";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HierarchicalGridExcelStyleFilteringLoadOnDemandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule
  ],
  providers: [RemoteValuesService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
