import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridColumnSelectionStylesComponent } from "./grid/column-selection-styles/column-selection-styles.component";
import { IgxGridModule } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridColumnSelectionStylesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxGridModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
