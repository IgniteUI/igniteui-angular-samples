import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { TreeGridEditingEventsComponent } from "./tree-grid/tree-grid-editing-events/tree-grid-editing-events.component";
import { 
	IgxTreeGridModule,
	IgxToastModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridEditingEventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxTreeGridModule,
		IgxToastModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
