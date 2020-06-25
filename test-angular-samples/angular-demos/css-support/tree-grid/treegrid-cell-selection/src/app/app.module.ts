import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { TreeGridCellSelectionComponent } from "./tree-grid/tree-grid-cellSelection-sample/tree-grid-cellSelection.component";
import { 
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxButtonGroupModule,
	IgxAvatarModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridCellSelectionComponent,
		IgxGridModule,
		IgxIconModule,
		IgxSwitchModule,
		IgxButtonGroupModule,
		IgxAvatarModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
