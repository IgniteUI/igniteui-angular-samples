import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { DockManagerComponent } from "./dock-manager-sample/dock-manager.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { defineCustomElements } from 'igniteui-dockmanager/loader';
defineCustomElements();


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		DockManagerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
