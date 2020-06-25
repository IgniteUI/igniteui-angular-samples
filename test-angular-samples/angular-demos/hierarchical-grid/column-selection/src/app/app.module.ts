import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HierarchicalGridColumnSelectionComponent } from "./hierarchical-grid/column-selection/hierarchical-grid-column-selection.component";
import { IgxHierarchicalGridModule } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HierarchicalGridColumnSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxHierarchicalGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
