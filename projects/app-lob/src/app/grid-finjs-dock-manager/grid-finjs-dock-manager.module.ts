
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonModule, IgxDialogModule, IgxDividerModule, IgxGridModule, IgxSliderModule,
    IgxSwitchModule, IgxTabsModule } from '@infragistics/igniteui-angular';
import { GridFinJSDockManagerRoutingModule } from './grid-finjs-dock-manager-routing.module';
import { GridFinJSDockManagerComponent } from './grid-finjs-dock-manager.component';
import { DockSlotComponent, GridHostDirective } from './dock-slot.component';
import { IgxPreventDocumentScrollModule } from '../../../../../src/app/directives/prevent-scroll.directive';

@NgModule({
    declarations: [
        GridFinJSDockManagerComponent,
        DockSlotComponent,
        GridHostDirective
    ],
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
        IgxTabsModule
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridFinJSDockManagerModule { }
