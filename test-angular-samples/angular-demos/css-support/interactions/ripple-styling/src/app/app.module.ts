import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxRippleModule,
	IgxAvatarModule,
	IgxIconModule,
	IgxButtonModule
 } from "igniteui-angular";
import { RippleStylingSampleComponent } from "./ripple-stying/ripple-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		RippleStylingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxRippleModule,
		IgxAvatarModule,
		IgxIconModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
