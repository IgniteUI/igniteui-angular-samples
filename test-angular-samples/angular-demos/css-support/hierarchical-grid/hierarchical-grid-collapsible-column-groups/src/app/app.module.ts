import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxTooltipModule
 } from "igniteui-angular";
import { HGridCollapsibleColumnGroupComponent } from "./hierarchical-grid/hierarchical-grid-collapsible-column-groups/hierarchical-grid-collapsible-column-groups.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridCollapsibleColumnGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		IgxTooltipModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
