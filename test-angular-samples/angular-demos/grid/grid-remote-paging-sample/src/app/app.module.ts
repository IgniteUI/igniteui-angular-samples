import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { RemotePagingGridSample } from "./grid/grid-remote-paging-sample/remote-paging-sample.component";
import { 
	IgxGridModule,
	IgxSelectModule
 } from "igniteui-angular";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { RemotePagingService } from "./grid/services/remotePagingService";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RemotePagingGridSample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		RouterModule.forRoot([]),
		IgxGridModule,
		HttpClientModule,
		IgxSelectModule
  ],
  providers: [RemotePagingService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
