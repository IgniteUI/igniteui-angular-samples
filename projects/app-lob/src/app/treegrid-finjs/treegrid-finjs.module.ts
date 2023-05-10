import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonGroupModule, IgxButtonModule, IgxFocusModule, IgxIconModule, IgxSelectModule, IgxSliderModule,
    IgxSwitchModule, IgxToggleModule, IgxTreeGridModule } from 'igniteui-angular';
import { IgxPreventDocumentScrollModule } from '../../../../../src/app/directives/prevent-scroll.directive';
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
        IgxTreeGridModule,
        IgxIconModule,
        IgxToggleModule,
        IgxSelectModule,
        IgxFocusModule,
        IgxButtonGroupModule
    ]
})
export class TreeGridFinjsModule {}
