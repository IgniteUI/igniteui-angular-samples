import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBottomNavModule } from "igniteui-angular";
import { TabbarStyleComponent } from "./tabbar-style/tabbar-style.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TabbarStyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBottomNavModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
