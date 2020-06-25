import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxAvatarModule } from "igniteui-angular";
import { AvatarSample3Component } from "./avatar-sample-3/avatar-sample-3.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		AvatarSample3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
