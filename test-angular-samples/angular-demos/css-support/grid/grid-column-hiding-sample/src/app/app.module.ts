import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { 
	IgxGridModule,
	IgxRadioModule,
	IgxColumnHidingModule
 } from "igniteui-angular";
import { GridColumnHidingSampleComponent } from "./grid/grid-column-hiding-sample/grid-column-hiding-sample.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridColumnHidingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxRadioModule,
		IgxColumnHidingModule,
		HttpClientModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
