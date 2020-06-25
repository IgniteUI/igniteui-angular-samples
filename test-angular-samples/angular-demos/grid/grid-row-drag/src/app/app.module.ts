import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxDragDropModule,
	IgxDialogModule
 } from "igniteui-angular";
import { GridDragSampleComponent } from "./grid/grid-row-drag/grid-row-drag.component";
import { PlanetComponent } from "./grid/grid-row-drag/planet/planet.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridDragSampleComponent,
		PlanetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxDragDropModule,
		IgxDialogModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
