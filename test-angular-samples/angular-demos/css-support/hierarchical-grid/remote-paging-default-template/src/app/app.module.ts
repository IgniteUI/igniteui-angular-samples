import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { HGridRemotePagingDefaultTemplateComponent } from "./hierarchical-grid/hierarchical-grid-remote-paging-default-template/hierarchical-grid-remote-paging-default-template.component";
import { HttpClientModule } from "@angular/common/http";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridRemotePagingDefaultTemplateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		HttpClientModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
