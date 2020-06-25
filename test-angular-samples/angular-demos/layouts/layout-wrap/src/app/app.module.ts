import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxLayoutModule } from "igniteui-angular";
import { LayoutWrapComponent } from "./layout/layout-wrap/layout-wrap.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		LayoutWrapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxLayoutModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
