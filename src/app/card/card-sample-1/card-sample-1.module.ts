import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxCardModule } from "igniteui-angular";
import { CardSample1Component } from "./card-sample-1.component";

@NgModule({
    declarations: [CardSample1Component],
    exports: [CardSample1Component],
    imports: [
        CommonModule,
        FormsModule,
        IgxCardModule]
})
export class CardSampleModule {}
