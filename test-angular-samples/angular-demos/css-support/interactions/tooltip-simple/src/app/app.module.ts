import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxTooltipModule
 } from "igniteui-angular";
import { TooltipSimpleComponent } from "./tooltip-simple/tooltip-simple.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TooltipSimpleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxTooltipModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
