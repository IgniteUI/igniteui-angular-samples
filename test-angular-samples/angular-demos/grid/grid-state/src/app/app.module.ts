import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { GridSaveStateComponent } from "./grid/grid-save-state/grid-state.component";
import { 
	IgxGridModule,
	IgxTooltipModule,
	IgxToastModule,
	IgxSwitchModule
 } from "igniteui-angular";
import { AboutComponent } from "./grid/grid-save-state/about.component";
import { 
	Router,
	RouterModule
 } from "@angular/router";
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		GridSaveStateComponent,
		AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxPreventDocumentScrollModule,
		IgxGridModule,
		IgxTooltipModule,
		RouterModule.forRoot([{component: AboutComponent, path: 'grid-about'},{component: GridSaveStateComponent, path: 'grid-state'},{ path: '', redirectTo: '/grid-state', pathMatch: 'full' }]),
		IgxToastModule,
		IgxSwitchModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
