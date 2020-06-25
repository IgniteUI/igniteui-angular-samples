import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxDividerModule } from "igniteui-angular";
import { DividerInsetComponent } from "./inset/divider-inset.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DividerInsetComponent
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
