import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxGridModule,
	IgxDragDropModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";
import { GridDragToGridSampleComponent } from "./grid/grid-row-drag-to-grid/grid-row-drag-to-grid.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridDragToGridSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxDragDropModule,
		IgxIconModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
