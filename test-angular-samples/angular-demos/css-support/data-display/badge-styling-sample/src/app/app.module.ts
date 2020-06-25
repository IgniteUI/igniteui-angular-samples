import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxBadgeModule,
	IgxListModule,
	IgxAvatarModule
 } from "igniteui-angular";
import { BadgeStylingSampleComponent } from "./badge-styling-sample/badge-styling-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BadgeStylingSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBadgeModule,
		IgxListModule,
		IgxAvatarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
