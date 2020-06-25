import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDividerModule } from "igniteui-angular";
import { DividerDefaultComponent } from "./default/divider-default.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DividerDefaultComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDividerModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
