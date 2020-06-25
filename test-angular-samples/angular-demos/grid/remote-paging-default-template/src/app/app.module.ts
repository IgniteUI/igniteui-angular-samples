import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { RemotePagingDefaultTemplateComponent } from "./grid/grid-remote-paging-defaultTemplate-sample/remote-paging-default-template.component";
import { IgxGridModule } from "igniteui-angular";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { RemotePagingService } from "./grid/services/remotePagingService";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RemotePagingDefaultTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		RouterModule.forRoot([]),
		IgxGridModule,
		HttpClientModule
  ],
  providers: [RemotePagingService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
