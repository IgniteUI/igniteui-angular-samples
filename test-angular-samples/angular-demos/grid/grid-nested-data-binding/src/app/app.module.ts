import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridNestedDataBindComponent } from "./grid/grid-nested-data-binding/grid-nested-data-bind";
import { 
	IgxGridModule,
	IgxInputGroupModule,
	IgxExpansionPanelModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridNestedDataBindComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxInputGroupModule,
		IgxExpansionPanelModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
