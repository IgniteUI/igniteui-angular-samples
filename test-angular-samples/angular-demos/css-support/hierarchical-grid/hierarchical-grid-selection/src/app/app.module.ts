import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxSwitchModule,
	IgxSnackbarModule,
	IgxButtonGroupModule
 } from "igniteui-angular";
import { HGridSelectionSampleComponent } from "./hierarchical-grid/hierarchical-grid-selection/hierarchical-grid-selection.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridSelectionSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		IgxSwitchModule,
		IgxSnackbarModule,
		IgxButtonGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
