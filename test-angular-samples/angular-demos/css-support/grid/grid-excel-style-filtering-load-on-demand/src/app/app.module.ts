import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridExcelStyleFilteringLoadOnDemandComponent } from "./grid/grid-excel-style-filtering-load-on-demand/grid-excel-style-filtering-load-on-demand.component";
import { IgxGridModule } from "igniteui-angular";
import { RemoteValuesService } from "./grid/grid-excel-style-filtering-load-on-demand/remoteValues.service";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridExcelStyleFilteringLoadOnDemandComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule
  ],
  providers: [RemoteValuesService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
