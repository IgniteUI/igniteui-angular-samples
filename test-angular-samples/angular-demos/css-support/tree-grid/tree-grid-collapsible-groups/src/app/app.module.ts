import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { 
	IgxTreeGridModule,
	IgxTooltipModule
 } from "igniteui-angular";
import { TreeGridMultiCollapsibleColumnGroupsComponent } from "./tree-grid/tree-grid-collapsible-groups/tree-grid-collapsible-column-groups.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridMultiCollapsibleColumnGroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxTooltipModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
