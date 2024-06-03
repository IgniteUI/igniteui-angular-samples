import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxIconButtonDirective, IgxIconModule, IgxPaginatorModule, IgxRippleModule } from 'igniteui-angular';
import { PaginatorRoutingModule } from './pagination-routing.module';
import { PaginationSampleComponent } from './paginator/pagination-sample.component';

@NgModule({ declarations: [
        PaginationSampleComponent
    ], imports: [CommonModule,
        FormsModule,
        PaginatorRoutingModule,
        IgxCardModule,
        IgxPaginatorModule,
        IgxButtonModule,
        IgxButtonGroupModule,
        IgxIconModule,
        IgxRippleModule,
        IgxIconButtonDirective], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class PaginationModule { }
