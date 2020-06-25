import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridMRLCustomNavigationComponent } from "./grid/grid-mrl-custom-navigation/grid-mrl-custom-navigation.component";
import { IgxGridModule } from "igniteui-angular";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridMRLCustomNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
