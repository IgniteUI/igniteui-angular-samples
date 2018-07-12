import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { IgxBulletGraphComponent } from "igniteui-angular-gauges/ES5/igx-bullet-graph-component";
import { IgxLinearGaugeComponent } from "igniteui-angular-gauges/ES5/igx-linear-gauge-component";
import { IgxRadialGaugeComponent } from "igniteui-angular-gauges/ES5/igx-radial-gauge-component";

import { IgxBulletGraphModule } from "igniteui-angular-gauges/ES5/igx-bullet-graph-module";
import { IgxLinearGaugeModule } from "igniteui-angular-gauges/ES5/igx-linear-gauge-module";
import { IgxRadialGaugeModule } from "igniteui-angular-gauges/ES5/igx-radial-gauge-module";

import { BulletGraphSampleComponent } from "./bullet-graph-sample/bullet-graph-sample.component";
import { LinearGaugeSampleComponent } from "./linear-gauge-sample/linear-gauge-sample.component";
import { RadialGaugeSampleComponent } from "./radial-gauge-sample/radial-gauge-sample.component";

@NgModule({
    declarations: [
        BulletGraphSampleComponent,
        LinearGaugeSampleComponent,
        RadialGaugeSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IgxBulletGraphModule,
        IgxLinearGaugeModule,
        IgxRadialGaugeModule
     ]
})
export class GaugeSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: GaugeSamplesModule
        };
    }
}
