import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { RemoteFilteringSampleComponent } from "./grid/grid-remote-filtering-sample/remote-filtering-sample.component";
import { 
	IgxGridModule,
	IgxBadgeModule,
	IgxToastModule
 } from "igniteui-angular";
import { HttpClientModule } from "@angular/common/http";
import { RemoteFilteringService } from "./grid/services/remoteFilteringService";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RemoteFilteringSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxBadgeModule,
		HttpClientModule,
		IgxToastModule
  ],
  providers: [RemoteFilteringService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
