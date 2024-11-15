
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonModule, IgxDialogModule, IgxDividerModule, IgxGridModule, IgxIconModule, IgxSelectModule, IgxSliderModule,
    IgxSwitchModule, IgxTabsModule, IgxToggleModule } from 'igniteui-angular';
import { GridFinJSDockManagerRoutingModule } from './grid-finjs-dock-manager-routing.module';
import { GridFinJSDockManagerComponent } from './grid-finjs-dock-manager.component';
import { DockSlotComponent, GridHostDirective } from './dock-slot.component';
import { IgxPreventDocumentScrollModule } from '../../../../../src/app/directives/prevent-scroll.directive';

@NgModule({
    imports: [
        GridFinJSDockManagerRoutingModule,
        IgxPreventDocumentScrollModule,
        CommonModule,
        FormsModule,
        IgxButtonModule,
        IgxSwitchModule,
        IgxSliderModule,
        IgxGridModule,
        IgxDialogModule,
        IgxDividerModule,
        IgxTabsModule,
        IgxToggleModule,
        IgxSelectModule,
        IgxIconModule,
        GridFinJSDockManagerComponent,
        DockSlotComponent,
        GridHostDirective
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridFinJSDockManagerModule { }
