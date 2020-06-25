import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { IgxTreeGridModule } from "igniteui-angular";
import { TreeGridPrimaryforeignkeySampleComponent } from "./tree-grid-primaryforeignkey-sample/tree-grid-primaryforeignkey-sample.component";
import { 
	IgxSparklineCoreModule,
	IgxSparklineModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridPrimaryforeignkeySampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxSparklineCoreModule,
		IgxSparklineModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
