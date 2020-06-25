import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { TreeGridColumnSelectionComponent } from "./tree-grid/column-selection/tree-grid-column-selection.component";
import { IgxTreeGridModule } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridColumnSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxTreeGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
