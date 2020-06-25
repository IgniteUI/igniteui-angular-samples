import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxInputGroupModule,
	IgxTextSelectionModule,
	IgxFocusModule
 } from "igniteui-angular";
import { InputTextSelectionComponent } from "./input-group/input-text-selection/input-text-selection.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		InputTextSelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxInputGroupModule,
		IgxTextSelectionModule,
		IgxFocusModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
