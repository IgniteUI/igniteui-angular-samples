import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxHierarchicalGridModule } from "igniteui-angular";
import { HierarchicalGridLoDSampleComponent } from "./hierarchical-grid/hierarchical-grid-lod/hierarchical-grid-lod.component";
import { RemoteLoDService } from "./hierarchical-grid/services/remote-lod.service";
import { HttpClientModule } from "@angular/common/http";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HierarchicalGridLoDSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxHierarchicalGridModule,
		HttpClientModule
  ],
  providers: [RemoteLoDService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
