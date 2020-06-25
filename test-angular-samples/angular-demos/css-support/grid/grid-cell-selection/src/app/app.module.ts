import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridCellSelectionComponent } from "./grid/grid-cellSelection-sample/grid-cellSelection.component";
import { 
	IgxGridModule,
	IgxSwitchModule,
	IgxIconModule,
	IgxButtonGroupModule,
	IgxAvatarModule,
	IgxSnackbarModule
 } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridCellSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxSnackbarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
