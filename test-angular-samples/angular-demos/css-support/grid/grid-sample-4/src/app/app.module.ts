import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridRemoteVirtualizationSampleComponent } from "./grid/grid-sample-4/grid-sample-4.component";
import { 
	IgxGridModule,
	IgxToastModule,
	IgxBadgeModule
 } from "igniteui-angular";
import { HttpClientModule } from "@angular/common/http";
import { RemoteServiceVirt } from "./grid/services/remoteService";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridRemoteVirtualizationSampleComponent
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
  providers: [RemoteServiceVirt],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
