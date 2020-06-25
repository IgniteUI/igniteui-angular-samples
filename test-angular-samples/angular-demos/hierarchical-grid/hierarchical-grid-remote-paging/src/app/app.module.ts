import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxHierarchicalGridModule,
	IgxSelectModule
 } from "igniteui-angular";
import { HGridRemotePagingSampleComponent } from "./hierarchical-grid/hierarchical-grid-paging/hierarchical-grid-remote-paging.component";
import { HttpClientModule } from "@angular/common/http";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridRemotePagingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		HttpClientModule,
		IgxSelectModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
