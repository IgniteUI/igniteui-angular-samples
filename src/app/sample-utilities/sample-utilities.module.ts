import { ModuleWithProviders, NgModule } from "@angular/core";
import { KeysPipe } from "./keys-pipe/keys-pipe";

@NgModule({
    declarations: [
        KeysPipe
    ],
    exports: [
        KeysPipe
    ]
})
export class SamplesUtilitiesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: SamplesUtilitiesModule
        };
    }
}
