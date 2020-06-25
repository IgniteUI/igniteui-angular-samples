import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HGridColumnSelectionStylesComponent } from "./hierarchical-grid/column-selection-styles/hierarchical-grid-column-selection-styles.component";
import { IgxHierarchicalGridModule } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HGridColumnSelectionStylesComponent
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
