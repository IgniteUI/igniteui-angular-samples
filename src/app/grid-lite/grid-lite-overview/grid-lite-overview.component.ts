import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    defineComponents,
    IgcRatingComponent
} from 'igniteui-webcomponents';
import { GridLiteDataService, User } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxSelectComponent } from 'igniteui-angular/select';
import { IgxBadgeComponent, IgxBadgeModule } from 'igniteui-angular/badge';
import { IgxChipComponent } from 'igniteui-angular';


defineComponents(
    IgcRatingComponent
);

@Component({
    selector: 'app-grid-lite-overview',
    templateUrl: './grid-lite-overview.component.html',
    styleUrls: ['./grid-lite-overview.component.scss'],
    imports: [
        CommonModule,
        IgxGridLiteComponent,
        IgxGridLiteColumnComponent,
        IgxAvatarComponent,
        IgxGridLiteCellTemplateDirective,
        IgxCheckboxComponent,
        IgxSelectComponent,
        IgxBadgeModule,
        IgxBadgeComponent,
        IgxChipComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteOverviewComponent implements OnInit {
    private dataService = inject(GridLiteDataService);

    public data: User[] = [];

    ngOnInit() {
        this.data = this.dataService.generateUsers(1000);
    }

    public getDepartmentBadgeVariant = (status: string): string => {
        switch (status) {
            case "Engineering":
                return "primary";
            case "Marketing":
                return "warning";
            case "Sales":
                return "error";
            case "Finance":
                return "success";
            default:
                return "primary";
        }
    };

    public getEmploymentTypeOutline = (type: string): string => {
        switch (type) {
            case 'Full-Time': return 'outline-success';
            case 'Part-Time': return 'outline-warning';
            case 'Contract': return 'outline-primary';
            default: return 'outline-primary';
        }
    };
}
