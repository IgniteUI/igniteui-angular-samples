import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDragDirective,
	IgxDropDirective,
	IgxListModule,
	IgxDragDropModule,
	IgxIconModule,
	IgxCheckboxModule
 } from "igniteui-angular";
import { EmailSampleComponent } from "./drag-drop/email-sample/email-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		EmailSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDragDropModule,
		IgxIconModule,
		IgxCheckboxModule,
		IgxListModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
