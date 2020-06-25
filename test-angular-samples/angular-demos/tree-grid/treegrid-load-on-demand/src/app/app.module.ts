import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxTreeGridModule } from "igniteui-angular";
import { TreeGridLoadOnDemandSampleComponent } from "./tree-grid/tree-grid-load-on-demand-sample/tree-grid-load-on-demand-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridLoadOnDemandSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
