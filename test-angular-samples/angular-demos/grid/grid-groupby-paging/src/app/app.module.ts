import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxIconModule
 } from "igniteui-angular";
import { GridGroupByPagingSampleComponent } from "./grid/grid-group-by-paging-sample/grid-group-by-paging-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridGroupByPagingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
