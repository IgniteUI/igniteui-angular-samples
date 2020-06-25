import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxTooltipModule,
	IgxToggleModule
 } from "igniteui-angular";
import { TooltipStyleComponent } from "./tooltip-style/tooltip-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TooltipStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxTooltipModule,
		IgxToggleModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
