import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxFilterModule,
	IgxListModule,
	IgxIconModule,
	IgxRippleModule,
	IgxForOfModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { IgxForComponent } from "./igxFor/igxFor.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		IgxForComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxFilterModule,
		IgxListModule,
		IgxIconModule,
		IgxRippleModule,
		IgxForOfModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
