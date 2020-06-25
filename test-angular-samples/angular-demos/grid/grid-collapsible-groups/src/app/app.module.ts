import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridCollapsibleColumnGroupsComponent } from "./grid/grid-collapsible-columnGroups/grid-collapsible-column-groups.component";
import { 
	IgxGridModule,
	IgxTooltipModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridCollapsibleColumnGroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxTooltipModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
