import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxTooltipModule,
	IgxIconModule
 } from "igniteui-angular";
import { TooltipRichComponent } from "./tooltip-rich/tooltip-rich.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TooltipRichComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxTooltipModule,
		IgxIconModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
