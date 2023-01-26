import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxIconModule, IgxPaginatorModule, IgxRippleModule } from '@infragistics/igniteui-angular';
import { PaginatorRoutingModule } from './pagination-routing.module';
import { PaginationSampleComponent } from './paginator/pagination-sample.component';

@NgModule({
    declarations: [
        PaginationSampleComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        PaginatorRoutingModule,
        IgxCardModule,
        IgxPaginatorModule,
        IgxButtonModule,
        IgxButtonGroupModule,
        IgxIconModule,
        IgxRippleModule
    ]
})
export class PaginationModule { }
