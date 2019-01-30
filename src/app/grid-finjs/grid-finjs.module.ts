import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxButtonModule, IgxGridModule, IgxSliderModule, IgxSwitchModule } from "igniteui-angular";
import { FinJSDemoComponent } from "./grid-finjs-demo.component";
import { LocalDataService } from "./localData.service";
import { GridFinjsRoutingModule } from "./grid-finjs-routing.module";

@NgModule({
    declarations: [
        FinJSDemoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxSliderModule,
        GridFinjsRoutingModule,
        IgxGridModule
    ],
    providers: [LocalDataService]
})
export class GridFinjsModule {}
