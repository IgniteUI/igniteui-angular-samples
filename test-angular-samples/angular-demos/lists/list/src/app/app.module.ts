import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxFilterOptions,
	IgxFilterModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxListModule
 } from "igniteui-angular";
import { ListComponent } from "./list/list.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxFilterModule,
		IgxIconModule,
		IgxInputGroupModule,
		IgxListModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
