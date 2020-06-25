import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxDropDownModule,
	IgxButtonModule,
	IgxToggleModule,
	IgxForOfModule,
	IgxToastModule
 } from "igniteui-angular";
import { DropDownRemoteComponent } from "./data-entries/dropdown/drop-down-remote-virtual/drop-down-remote.component";
import { HttpClientModule } from "@angular/common/http";
import { RemoteService } from "./grid/services/remote.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DropDownRemoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxDropDownModule,
		IgxButtonModule,
		IgxToastModule,
		IgxToggleModule,
		IgxForOfModule,
		HttpClientModule
  ],
  providers: [RemoteService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
