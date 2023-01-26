/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
    IgxAvatarModule, IgxButtonModule, IgxGridModule,
    IgxIconModule, IgxInputGroupModule, IgxRippleModule
} from '@infragistics/igniteui-angular';

import { IgxPreventDocumentScrollModule } from '../../../../../src/app/directives/prevent-scroll.directive';
import { GridsCrmRoutingModule } from './grid-crm-routing.module';
import { GridCRMComponent } from './grid-crm.component';

@NgModule({
    declarations: [
        GridCRMComponent
    ],
    imports: [
        IgxRippleModule,
        GridsCrmRoutingModule,
        IgxGridModule,
        IgxIconModule,
        IgxAvatarModule,
        IgxInputGroupModule,
        IgxButtonModule,
        FormsModule,
        IgxPreventDocumentScrollModule
    ]
})
export class GridsCrmModule { }
