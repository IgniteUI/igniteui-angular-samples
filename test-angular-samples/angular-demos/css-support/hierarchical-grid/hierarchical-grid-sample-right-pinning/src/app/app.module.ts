import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HierarchicalGridRightPinningSampleComponent } from "./hierarchical-grid/hierarchical-grid-sample-right-pinning/hierarchical-grid-right-pinning.component";
import { 
	IgxHierarchicalGridModule,
	IgxAvatarModule,
	IgxTooltipModule
 } from "igniteui-angular";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		HierarchicalGridRightPinningSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxHierarchicalGridModule,
		IgxAvatarModule,
		IgxTooltipModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
