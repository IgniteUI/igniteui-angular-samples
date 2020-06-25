import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridRemoteVirtualizationAddRowSampleComponent } from "./grid/grid-sample-5/grid-sample-5.component";
import { 
	IgxGridModule,
	IgxToastModule,
	IgxBadgeModule
 } from "igniteui-angular";
import { HttpClientModule } from "@angular/common/http";
import { RemoteService } from "./grid/grid-sample-5/remote.service";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridRemoteVirtualizationAddRowSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxToastModule,
		IgxBadgeModule,
		HttpClientModule
  ],
  providers: [RemoteService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
