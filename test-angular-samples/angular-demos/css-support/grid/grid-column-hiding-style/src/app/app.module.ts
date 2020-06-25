import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { IgxGridModule } from "igniteui-angular";
import { GridColumnHidingToolbarStyleComponent } from "./grid/grid-column-hiding-toolbar-style/grid-column-hiding-toolbar-style.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridColumnHidingToolbarStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		HttpClientModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
