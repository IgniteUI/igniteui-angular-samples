import { NgModule } from "@angular/core";
import { GridCRMModule } from '../../../app-lob/src/app/grid-crm/grid-crm/grid-crm.module';
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent
    ],
    imports: [
        GridCRMModule
    ]
})
export class AppModule { }
