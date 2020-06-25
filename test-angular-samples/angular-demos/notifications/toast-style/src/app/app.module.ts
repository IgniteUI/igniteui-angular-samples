import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxButtonModule,
	IgxRippleModule,
	IgxToastModule
 } from "igniteui-angular";
import { ToastStyleComponent } from "./toast-style/toast-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ToastStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxButtonModule,
		IgxRippleModule,
		IgxToastModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
