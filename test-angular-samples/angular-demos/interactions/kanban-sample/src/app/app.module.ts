import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { KanbanSampleComponent } from "./drag-drop/kanban-sample/kanban-sample.component";
import { 
	IgxDragDirective,
	IgxDropDirective,
	IgxDragDropModule,
	IgxDialogModule,
	IgxCardModule,
	IgxChipsModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		KanbanSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDragDropModule,
		IgxCardModule,
		IgxChipsModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
