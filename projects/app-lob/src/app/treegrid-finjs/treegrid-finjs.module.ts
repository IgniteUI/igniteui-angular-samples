import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonModule, IgxExcelExporterService, IgxSliderModule,
    IgxSwitchModule, IgxTreeGridModule } from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from '../directives/prevent-scroll.directive';
import { TreeGridFinJSComponent } from './tree-grid-finjs-sample.component';
import { TreeGridFinjsRoutingModule } from './treegrid-finjs-routing.module';

@NgModule({
    declarations: [
        TreeGridFinJSComponent
    ],
    imports: [
        CommonModule,
        IgxPreventDocumentScrollModule,
        FormsModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxSliderModule,
        TreeGridFinjsRoutingModule,
        IgxTreeGridModule
    ],
    providers: [IgxExcelExporterService]
})
export class TreeGridFinjsModule {}
