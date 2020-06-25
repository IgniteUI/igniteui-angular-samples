import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDragDropModule,
	IgxDialogModule,
	IgxIconModule,
	IgxButtonModule,
	IgxToggleModule,
	NoOpScrollStrategy,
	ConnectedPositioningStrategy,
	GlobalPositionStrategy
 } from "igniteui-angular";
import { DragDialogSampleComponent } from "./drag-drop/dialog-sample/drag-dialog-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DragDialogSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDragDropModule,
		IgxDialogModule,
		IgxIconModule,
		IgxButtonModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
