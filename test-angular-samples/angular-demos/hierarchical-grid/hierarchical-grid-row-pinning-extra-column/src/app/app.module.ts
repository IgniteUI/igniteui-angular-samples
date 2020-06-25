import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HGridRowPinningExtraColumnSampleComponent } from "./hierarchical-grid/hierarchical-grid-row-pinning-extra-column/hierarchical-grid-row-pinning-extra-column.component";
import { 
	IgxHierarchicalGridModule,
	IgxIconModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridRowPinningExtraColumnSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		IgxIconModule,
		IgxSwitchModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
